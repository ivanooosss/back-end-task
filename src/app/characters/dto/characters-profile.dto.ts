import { CharactersProfileEntity } from '../entity/characters-profile.entity';

export class CharactersProfileDto {
  species: string;
  type: string;
  gender: string;
  origin: JSON;
  location: JSON;
  image: string;
  episode: [];
  url: string;
  created: Date;
}
