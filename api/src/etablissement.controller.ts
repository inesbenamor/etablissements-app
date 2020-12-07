import { Controller, Get, Param, Put, Body, Query, Post } from '@nestjs/common';
import { EtablissementService } from './etablissement.service';
import { Etablissement } from './Etablissement';


@Controller()
export class EtablissementController {
  constructor(private readonly etablissementService: EtablissementService) {}
  

  // Ajouter requêtes: addEtablissement, getEtablissement, 

  /*@Post()
  createEtablissement(@Body() newEtablissement: Etablissement): Etablissement {
    this.etablissementService.addEtablissement(newEtablissement);
    return this.etablissementService.getEtablissement(newEtablissement.uai);
  }*/

  @Get()
  getEtablissements(){
    return this.etablissementService.getAllEtablissements();
  }


  @Get('/:uai')
  async getEtablissementsD(@Param('uai') uai : string) {
    return this.etablissementService.getEtablissementDetail(uai);
  }


  @Put('/:uai')
  addToFavori(@Param('uai') uai : string){
    return this.etablissementService.addToFavori(uai);
  }
  
}