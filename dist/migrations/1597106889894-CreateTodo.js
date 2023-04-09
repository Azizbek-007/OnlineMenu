"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTodo1597106889894 = void 0;
class CreateTodo1597106889894 {
    constructor() {
        this.name = 'CreateTodo1597106889894';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "todo" (
        "id" SERIAL NOT NULL,
        "text" character varying NOT NULL,
        "done" boolean NOT NULL DEFAULT false,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        "ownerId" integer NOT NULL,
        CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"),
        CONSTRAINT "FK_05552e862619dc4ad7ec8fc9cb8" FOREIGN KEY ("ownerId")
          REFERENCES "user"("id")
          ON DELETE RESTRICT
          ON UPDATE NO ACTION
        )`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "todo" DROP CONSTRAINT "FK_05552e862619dc4ad7ec8fc9cb8"`);
        await queryRunner.query(`DROP TABLE "todo"`);
    }
}
exports.CreateTodo1597106889894 = CreateTodo1597106889894;
//# sourceMappingURL=1597106889894-CreateTodo.js.map