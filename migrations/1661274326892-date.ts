import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class meet1661274326892 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "date",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: "details",
                        type: "varchar",
                    },
                    {
                        name: "coordinates",
                        type: 'text'
                    },
                    {
                        name:"meet",
                        type: "date",

                    },
                    {
                        name: "creature_id",
                        type: "int"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            }),
            true,
        )
        await queryRunner.createForeignKey(
            "meet",
            new TableForeignKey({
                name: "ct_fk",
                columnNames: ["creature_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "creature",
                onDelete: "CASCADE",
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("answer", "ct_fk")
        await queryRunner.dropTable("meet")
    }

}
