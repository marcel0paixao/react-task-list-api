import { getRepository } from "typeorm";
import { Task } from "./../entities/Task";


export class GetAllTasksService {
    async execute() {
        const repo = getRepository(Task)

        const tasks = await repo.find()

        return tasks
    }
}