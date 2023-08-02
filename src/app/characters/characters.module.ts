import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { HttpService, HttpModule } from '@nestjs/axios';
import { CharactersRepo } from './repo/characters.repo';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { CharactersProfileEntity } from './entity/characters-profile.entity';
import { CharactersProfileRepo } from './repo/characters-profile.repo';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [CharactersProfileEntity],
    }),
    HttpModule.registerAsync({
      useFactory: () => ({
        baseURL: process.env.RICKANDMORTY_API,
      }),
    }),
  ],
  controllers: [CharactersController],
  providers: [CharactersService, CharactersRepo, CharactersProfileRepo],
})
export class CharactersModule {}
