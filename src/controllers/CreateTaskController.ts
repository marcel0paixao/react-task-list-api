import { Request, Response } from "express";
import { CreateTaskService } from "../services/CreateTaskService";

export class CreateTaskController{
    async handle(request: Request, response: Response){
        const{ name, description } = request.body

        const service = new CreateTaskService

        const result = await service.execute({name, description, status: false})

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}