import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from 'mongoose';


export type PartidoDocument = Partido & Document;


@Schema()
export class Partido{
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Torneo' })
  idTorneo: string;
  
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Equipo' })
  idEquipo1: string;
  
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Equipo' })
  idEquipo2: string;
  
  @Prop({ type: Number })
  golesEquipo1: number;
  
  @Prop({ type: Number })
  golesEquipo2: number;
  
  @Prop({ type: String })
  observacion: string;

}



export const PartidoSchema = SchemaFactory.createForClass(Partido);