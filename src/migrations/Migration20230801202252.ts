import { Migration } from '@mikro-orm/migrations';

export class Migration20230801202252 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "character_profile" ("id" serial primary key, "name" varchar(255) not null, "status" varchar(255) not null, "species" varchar(255) not null, "type" varchar(255) not null, "gender" varchar(255) not null, "origin" jsonb not null, "location" jsonb not null, "image" varchar(255) not null, "episode" varchar(255) not null, "url" varchar(255) not null, "created" timestamptz(0) not null);');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "character_profile" cascade;');
  }

}
