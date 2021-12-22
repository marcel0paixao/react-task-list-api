import { getRepository } from "typeorm";
import { Task } from "../entities/Task";

type TaskRequest = {
    name: string
    description: string
}

export class DeleteTaskService{
    async execute(id: string){
        const repo = getRepository(Task)

        if (!await repo.findOne(id)) {
            return new Error("task doesn't exists!")
        }
        await repo.delete(id)
    }
}