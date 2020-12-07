import { Module } from '@nestjs/common';
import { EtablissementController } from './etablissement.controller';
import { EtablissementService } from './etablissement.service';


@Module({
  imports: [],
  controllers: [EtablissementController],
  providers: [EtablissementService],
})
export class EtablissementModule {}