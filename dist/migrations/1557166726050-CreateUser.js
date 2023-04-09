"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser1557166726050 = void 0;
class CreateUser1557166726050 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" (
          "id" SERIAL NOT NULL,
          "name" character varying NOT NULL,
          "phone" character varying NOT NULL,
          "password" character varying NOT NULL,
          "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
          "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
          CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"),
          CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
        )`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.CreateUser1557166726050 = CreateUser1557166726050;
//# sourceMappingURL=1557166726050-CreateUser.js.map