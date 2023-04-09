"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfile1570141220019 = void 0;
class CreateProfile1570141220019 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "profile" (
          "id" SERIAL NOT NULL,
          "phone" character varying NOT NULL,
          "birthday" date NOT NULL,
          "website" character varying NOT NULL,
          "occupation" character varying NOT NULL,
          "userId" integer,
          CONSTRAINT "REL_a24972ebd73b106250713dcddd"
            UNIQUE ("userId"),
          CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb"
            PRIMARY KEY ("id"),
          CONSTRAINT "FK_a24972ebd73b106250713dcddd9"
            FOREIGN KEY ("userId")
            REFERENCES "user"("id")
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
        )`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "FK_a24972ebd73b106250713dcddd9"`);
        await queryRunner.query(`DROP TABLE "profile"`);
    }
}
exports.CreateProfile1570141220019 = CreateProfile1570141220019;
//# sourceMappingURL=1570141220019-CreateProfile.js.map