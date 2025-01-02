import { MigrationInterface, QueryRunner } from 'typeorm';

export class Alarm1735397371710 implements MigrationInterface {
  name = 'Alarm1735397371710';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "alarm_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "severity" character varying NOT NULL, CONSTRAINT "PK_52a2e0cfeeb3536ebc2331d853c" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "alarm_entity"`);
  }
}
