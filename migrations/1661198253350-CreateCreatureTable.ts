import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCreatureTable1661198253350 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "creature",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                ],
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("creature")
    }

}
