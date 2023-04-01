export interface Partido{
  _id?: string;
  idTorneo: string;
  idEquipo1: string;
  idEquipo2: string;
  golesEquipo1: number;
  golesEquipo2: number;
  observacion: string;
  __v?: Number;
}