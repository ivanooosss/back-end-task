import { Migration } from '@mikro-orm/migrations';

export class Migration20230801204042 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "character_profile" alter column "episode" type jsonb using ("episode"::jsonb);');
  }

  async down(): Promise<void> {
    this.addSql('alter table "character_profile" alter column "episode" type varchar(255) using ("episode"::varchar(255));');
  }

}
