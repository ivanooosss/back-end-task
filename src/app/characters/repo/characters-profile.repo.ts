import { Injectable } from '@nestjs/common';
import { ApiCharacterEntity } from '../entity/apiCharacter.entity';
import { CharactersProfileEntity } from '../entity/characters-profile.entity';
import { EntityRepository, EntityManager } from '@mikro-orm/postgresql';
import { HttpService } from '@nestjs/axios';
@Injectable()
export class CharactersProfileRepo extends EntityRepository<CharactersProfileEntity> {
  constructor(private readonly httpService: HttpService, private readonly manager: EntityManager) {
    super(manager, CharactersProfileEntity);
  }
  async getList(): Promise<ApiCharacterEntity[]> {
    const response = await this.httpService.axiosRef.get('/character');

    console.log(response.data);

    if (response.data && response.data.results) {
      return response.data.results;
    }

    return response.data;
  }

  async addCharactersProfiles(characters: ApiCharacterEntity[]) {
    const charactersProfiles = characters.map(async (character) => {
      const characterProfileEnt = this.create({
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        type: character.type,
        gender: character.gender,
        origin: character.origin,
        location: character.location,
        image: character.image,
        episode: character.episode,
        url: character.url,
        created: character.created,
      });
      return this.persistAndFlush(characterProfileEnt);
    });
  }
}
