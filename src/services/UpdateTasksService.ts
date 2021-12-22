import { getRepository } from "typeorm";
import { Task } from "../entities/Task";

type taskUpdateRequest = {
    id: string
    name: string
    description: string
    status: boolean
}

export class UpdateTaskService{
    async execute({id, name, description, status}: taskUpdateRequest){
        const repo = getRepository(Task)

        const task = await repo.findOne(id)
        if (!task) {
            return new Error("Task doesn't exists!")
        }
        task.name = name ?? task.name
        task.description = description ?? task.description
        task.status = status ?? task.status

        await repo.save(task)

        return task
    }
}