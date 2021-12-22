import { getRepository } from "typeorm";
import { Task } from "../entities/Task";


export class GetTaskService {
    async execute(id: string) {
        const repo = getRepository(Task)

        const task = await repo.findOne(id)
        if (!task) {
            return new Error("Task doesn't exists!")
        }

        return task
    }
}