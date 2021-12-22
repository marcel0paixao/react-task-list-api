import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm"
import { v4 as uuid } from "uuid";

@Entity("tasks")
export class Task{
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    status: boolean

    @CreateDateColumn()
    created_at: Date

    constructor(){
        if (!this.id) {
            this.id = uuid()
        }
    }
}