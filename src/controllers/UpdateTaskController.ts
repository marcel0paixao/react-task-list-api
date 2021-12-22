import { Request, Response } from "express";
import { UpdateTaskService } from "../services/UpdateTasksService";

export class UpdateTaskController{
    async handle(request: Request, response: Response){
        const{ id } = request.params
        const{ name, description, status } = request.body

        const service = new UpdateTaskService()

        const result = await service.execute({id, name, description, status})

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}