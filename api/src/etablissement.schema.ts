import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'etablissements' })
export class EtablissementDocument extends Document {
  @Prop()
  uai: string;
  
  @Prop()
  uo_lib: string;

  @Prop()
  type_d_etablissement: string;
  
  @Prop()
  com_nom: string;

  @Prop()
  favori : boolean;
}

export const EtablissementSchema = SchemaFactory.createForClass(EtablissementDocument);