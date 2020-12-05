import { Injectable } from '@nestjs/common';
import { Etablissement } from './Etablissement';
import { InjectModel } from '@nestjs/mongoose';
import { EtablissementDocument } from './etablissement.schema';
import { Model } from 'mongoose';
import { EtablissementDetail } from './EtablissementDetail';
import fetch from "node-fetch";

@Injectable()
export class EtablissementService {
  private readonly etablissementsDetails: Array<EtablissementDetail> = [];
  private url = 'https://data.opendatasoft.com/api/records/1.0/search/?dataset=fr-esr-principaux-etablissements-enseignement-superieur%40mesr&rows=500&sort=uo_lib&facet=uai&facet=type_d_etablissement&facet=secteur_d_etablissement&facet=com_nom&facet=aca_nom' as const;
  
  constructor(
  @InjectModel(EtablissementDocument.name)
    private readonly EtablissementRepository: Model<EtablissementDocument>
  ) { }

  addEtablissement(etablissement: Etablissement): Promise<Etablissement> {
    return this.EtablissementRepository.create(etablissement);
  }

  getEtablissement(uai: string): Promise<Etablissement | undefined> {
    return this.EtablissementRepository.findOne({ uai: uai }).exec();
  }

  getEtablissementDetail(uai: string): EtablissementDetail {
    let j = 0;
    for (let i = 0; i < this.etablissementsDetails.length; i++) {
      if (this.etablissementsDetails[i].uai == uai) {
        j = i;
      }
    } //logique à changer, pas optimal - check s'il y a une fct index
    return this.etablissementsDetails[j];
  }

  getAllEtablissements() {
    return this.EtablissementRepository.find().exec();
  }

  getTotalNumberOfEtablissements() {
    return this.EtablissementRepository.countDocuments().exec();
  }

  async getData() {

    const response = await fetch(this.url)
    const data = await response.json();

    for (let i = 0; i < data.nhits; i++) {
      
      const e: Etablissement = {
        uai: data.records[i].fields.uai,
        uo_lib: data.records[i].fields.uo_lib,
        type_d_etablissement: data.records[i].fields.type_d_etablissement,
        com_nom: data.records[i].fields.com_nom,
        favori: false
      };
      
      const eDetail: EtablissementDetail = {
        uai: data.records[i].fields.uai,
        aca_nom: data.records[i].fields.aca_nom,
        secteur_d_etablissement: data.records[i].fields.secteur_d_etablissement,
      }
      
      this.etablissementsDetails.push(eDetail);
      await this.addEtablissement(e);
    }

    return ('Data well received');

  }

  async addToFavori(id: string, favo: boolean): Promise<Etablissement> {
    const filter = { uai: id};
    await this.EtablissementRepository.findOneAndUpdate(filter, favo, { new: true });
    return this.getEtablissement(id);
  }
}