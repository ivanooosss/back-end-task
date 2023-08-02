import { Injectable,} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import axios from 'axios';
import { ApiCharacterEntity } from '../entity/apiCharacter.entity';
@Injectable()
export class CharactersRepo {
  constructor(private readonly httpService: HttpService) {}


}
