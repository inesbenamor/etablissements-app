import { Injectable,OnModuleInit } from '@nestjs/common';
import { Etablissement } from './Etablissement';
import { EtablissementDetail } from './EtablissementDetail';
import fetch from "node-fetch";

@Injectable()
export class EtablissementService implements OnModuleInit {
  async onModuleInit() {
    console.log(`The module has been initialized.`);
    const response = await fetch(this.url)
    const data = await response.json();

    for (let i = 0; i < data.nhits; i++) {
      const e: Etablissement = {
        uai: data.records[i].fields.uai,
        uo_lib: data.records[i].fields.uo_lib,
        type_d_etablissement: data.records[i].fields.type_d_etablissement,
        com_nom: data.records[i].fields.com_nom,
        favori: "false"
      };
      
      const eDetail: EtablissementDetail = {
        uai: data.records[i].fields.uai,
        aca_nom: data.records[i].fields.aca_nom,
        secteur_d_etablissement: data.records[i].fields.secteur_d_etablissement,
        uo_lib: data.records[i].fields.uo_lib,
        type_d_etablissement: data.records[i].fields.type_d_etablissement,
        com_nom: data.records[i].fields.com_nom,
      }
      
      this.etablissementsDetails.set(eDetail.uai, eDetail);
      this.addEtablissement(e);
    }
    console.log(`The data has been well received.`);
  }

  private readonly etablissements: Map<string, Etablissement> = new Map();
  private readonly etablissementsDetails: Map<string, EtablissementDetail> = new Map();
  
  private url = 'https://data.opendatasoft.com/api/records/1.0/search/?dataset=fr-esr-principaux-etablissements-enseignement-superieur%40mesr&rows=500&sort=uo_lib&facet=uai&facet=type_d_etablissement&facet=secteur_d_etablissement&facet=com_nom&facet=aca_nom' as const;


  //doit renvoyer seulement quelques infos

  addEtablissement(etablissement: Etablissement): void {
    this.etablissements.set(etablissement.uai, etablissement);
  }

  getEtablissement(uai: string): Etablissement | undefined {
    return this.etablissements.get(uai);
  }

  //doit renvoyer toutes les infos disponible

  getEtablissementDetail(uai: string): EtablissementDetail | undefined {
    return this.etablissementsDetails.get(uai);
  }

  // renvoie une liste d'etablissement sans le detail

  getAllEtablissements() {
    return Array.from(this.etablissements.values());
  }

/*
  async addToFavori(uai: string): Promise<Etablissement> {
    for (let i = 0; i < this.etablissements.size; i++){
      console.log(`Boucle for`);
      if ((this.etablissements[i].uai = uai) &&(this.etablissements[i].favori = "false")) {
        this.etablissements[i].set(this.etablissements[i].favori, "true");
        console.log(`Boucle if`);
      }
    }
    return this.etablissements.get(uai);
    console.log(`Return`);
  }*/

  async addToFavori(uai: string): Promise<Etablissement> {

    const e: Etablissement = {
      uai: this.etablissements.get(uai).uai,
      uo_lib: this.etablissements.get(uai).uo_lib,
      type_d_etablissement: this.etablissements.get(uai).type_d_etablissement,
      com_nom: this.etablissements.get(uai).com_nom,
      favori: "true"
    };
    
    this.etablissements.set(this.etablissements.get(uai).uai, e);
    
    return this.etablissements.get(uai);
  }


}