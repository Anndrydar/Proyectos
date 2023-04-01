import { Controller, Get, Post, Body, Patch, Param, Delete, Put
} from '@nestjs/common';
import { EquiposService } from './equipos.service';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { ApiTags, ApiResponse} from '@nestjs/swagger';
import { Request } from 'express';
import { Req } from '@nestjs/common';

@Controller('equipos')
@ApiTags('equipo')

export class EquiposController {
  constructor(private readonly equiposService: EquiposService) {}

  @Post()
  @ApiResponse({status:201, description:'Equipo de futbol creado'})
  @ApiResponse({status:500, description:'Falla del servidor'})
  create(@Body() createEquipoDto: CreateEquipoDto) {
    return this.equiposService.create(createEquipoDto);
  }

  @Get()
  @ApiResponse({status:200, description:'Busqueda completa de los equipos'})
  findAll(@Req() request: Request) {
    return this.equiposService.findAll(request);
  }

  @Get(':id')
  @ApiResponse({status:200, description:'Busquedad de un solo equipo realizada'})
  @ApiResponse({status:404, description:'Busquedad del equipo no encontrada'})
  @ApiResponse({status:500, description:'Falla del servidor'})
  findOne(@Param('id') id: string) {
    return this.equiposService.findOne(id);
  }


  @Put(':id')
  @ApiResponse({status:201, description:'Propiedades de equipo modificadas'})
  @ApiResponse({status:404, description:'Equipo no encontrado'})
  update(@Param('id') id: string, @Body() createEquipoDto: CreateEquipoDto) {
    return this.equiposService.update(id, createEquipoDto);
  }

  @Delete(':id')
  @ApiResponse({status:201, description:'Equipo eliminad o'})
  @ApiResponse({status:404, description:'Equipo no encontrado'})
  remove(@Param('id') id: string) {
    return this.equiposService.remove(id);
  }
}
