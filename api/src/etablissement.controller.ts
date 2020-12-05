import { Controller, Get, Param, Put, Body } from '@nestjs/common';
import { EtablissementService } from './etablissement.service';
import { Etablissement } from './Etablissement';


@Controller('/etablissements')
export class EtablissementController {
  constructor(private readonly etablissementService: EtablissementService) {}
  
  @Get('/data')
  getData()  {
    return this.etablissementService.getData();
  }
  
  @Get()
  getEtablissements(){
    return this.etablissementService.getAllEtablissements();
  }

  /*@Get('/:uai')
  async getEtablissement(@Param('uai') uai : string) {
    return this.etablissementService.getEtablissement(uai);
  }*/

  @Get('/:uai')
  async getEtablissement(@Param('uai') uai : string) {
    return this.etablissementService.getEtablissementDetail(uai);
  }

  @Put('/:uai')
  addToFavori(@Param('uai') uai : string, @Body() favo : boolean) : Promise<Etablissement> {
    return this.etablissementService.addToFavori(uai,favo);
  }
}