import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTasks1639728062997 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tasks",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "status",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tasks")
    }

}
