import { Request, Response } from "express";
import { GetAllTasksService } from "./../services/GetAllTasksService";


export class GetAllTasksController {
    async handle(request: Request, response: Response){
        const service = new GetAllTasksService()
        const tasks = await service.execute()
        return response.json(tasks)
    }
}