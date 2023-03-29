import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from 'mongoose';

export type EquipoDocument = Equipo & Document;

@Schema()
export class Equipo {
    
  @Prop({ type: String })
  nombre: string;

  @Prop({ type: String })
  descripcion: string;

  @Prop({ type: String })
  serie: string;
  

}

export const EquipoSchema = SchemaFactory.createForClass(Equipo);
