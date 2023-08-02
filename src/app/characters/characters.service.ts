import { Injectable } from '@nestjs/common';
import { CharactersRepo } from './repo/characters.repo';
import { ApiCharacterEntity } from './entity/apiCharacter.entity';
import { CharactersProfileRepo } from './repo/characters-profile.repo';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class CharactersService {
  constructor(
    private readonly charactersRepo: CharactersRepo,
    private readonly charactersProfileRepo: CharactersProfileRepo,
    private readonly httpService: HttpService,
  ) {}
  async getCharacters() {
    return this.charactersProfileRepo.getList();
  }
  async addCharacters() {
    const response = await this.httpService.axiosRef.get(
      'http://localhost:3000/characters',
    );
    return await this.charactersProfileRepo.addCharactersProfiles(
      response.data,
    );
  }
}
