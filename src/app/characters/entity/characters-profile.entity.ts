import {
  Entity,
  Property,
  OneToOne,
  PrimaryKey,
  JsonType,
  StringType,
} from '@mikro-orm/core';
import { CharactersRepo } from '../repo/characters.repo';
import { CharactersProfileRepo } from '../repo/characters-profile.repo';

@Entity({
  tableName: 'character_profile',
  customRepository: () => CharactersProfileRepo,
})
export class CharactersProfileEntity {
  @PrimaryKey()
  id!: number;
  @Property({ name: 'name' })
  name!: string;
  @Property({ name: 'status' })
  status!: string;
  @Property({ name: 'species' })
  species!: string;
  @Property({ name: 'type' })
  type!: string;
  @Property({ name: 'gender' })
  gender!: string;
  @Property({ name: 'origin', type: JsonType })
  origin!: any;
  @Property({ name: 'location', type: JsonType })
  location!: any;
  @Property({ name: 'image' })
  image!: string;
  @Property({ name: 'episode', type: JsonType })
  episode: string[];
  @Property({ name: 'url' })
  url: string;
  @Property({ name: 'created' })
  created: Date;
}
