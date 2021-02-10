import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateComposition1612979393986 implements MigrationInterface {
    name = 'CreateComposition1612979393986'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "college" ("graduations" character varying NOT NULL, "twoYearDegrees" character varying NOT NULL, "identificationId" uuid NOT NULL DEFAULT uuid_generate_v4(), "identificationName" character varying NOT NULL, "identificationCnpj" character varying NOT NULL, "identificationCreated_at" TIMESTAMP NOT NULL DEFAULT now(), "identificationUpdate_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ea02cccb5b3a75968ef94483fcf" PRIMARY KEY ("identificationId"))`);
        await queryRunner.query(`CREATE TABLE "school" ("identificationId" uuid NOT NULL DEFAULT uuid_generate_v4(), "identificationName" character varying NOT NULL, "identificationCnpj" character varying NOT NULL, "identificationCreated_at" TIMESTAMP NOT NULL DEFAULT now(), "identificationUpdate_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1636edd84f5b71c04ed5a91626a" PRIMARY KEY ("identificationId"))`);
        await queryRunner.query(`CREATE TABLE "university" ("graduations" character varying NOT NULL, "doctors" character varying NOT NULL, "masters" character varying NOT NULL, "identificationId" uuid NOT NULL DEFAULT uuid_generate_v4(), "identificationName" character varying NOT NULL, "identificationCnpj" character varying NOT NULL, "identificationCreated_at" TIMESTAMP NOT NULL DEFAULT now(), "identificationUpdate_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d6c034b996fecea5836da42dc44" PRIMARY KEY ("identificationId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "university"`);
        await queryRunner.query(`DROP TABLE "school"`);
        await queryRunner.query(`DROP TABLE "college"`);
    }

}
