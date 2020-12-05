import { Module } from '@nestjs/common';
import { EtablissementController } from './etablissement.controller';
import { EtablissementService } from './etablissement.service';
import { EtablissementDocument, EtablissementSchema } from './etablissement.schema';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb://uht3sohis1mldn19adwf:IPX5vK92lnO71nHeJriF@bqxuj1qtyo7iqvb-mongodb.services.clever-cloud.com:27017/bqxuj1qtyo7iqvb'),MongooseModule.forFeature([
    { name: EtablissementDocument.name, schema: EtablissementSchema },
  ])],
  controllers: [EtablissementController],
  providers: [EtablissementService],
})
export class EtablissementModule {}