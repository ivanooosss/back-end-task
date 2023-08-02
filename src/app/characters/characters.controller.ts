import { Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { CharactersService } from './characters.service';
import { CharactersDto } from './dto/characters.dto';
//import { BadRequestException, Body, Controller,, HttpStatus, Param, Post, UseGuards } from "@nestjs/common";
@Controller('characters')
export class CharactersController {
  constructor(private readonly characterService: CharactersService) {}
  @Get()
  async getCharactersInfo() {
    const result = await this.characterService.getCharacters();
    return result;
  }

  @Post()
  async addCharactersInfo() {
    return await this.characterService.addCharacters();
  }
}
