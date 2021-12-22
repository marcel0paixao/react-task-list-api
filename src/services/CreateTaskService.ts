import { getRepository } from "typeorm";
import { Task } from "./../entities/Task";

type TaskRequest = {
    name: string
    description: string
    status: boolean
}

export class CreateTaskService{
    async execute({name, description, status}: TaskRequest): Promise<Task | Error>{
        const repo = getRepository(Task)

        if(await repo.findOne({name})){
            return new Error("Task already exists")
        }

        if(description === null || description === '' || name  === null || name  === '') {
            return new Error("Cannot add null variables")
        }

        const task = repo.create({
            name,
            description,
            status: false
        })

        await repo.save(task)

        return task
    }
}