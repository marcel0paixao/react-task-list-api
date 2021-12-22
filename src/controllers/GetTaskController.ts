import { json, Request, Response } from "express";
import { GetTaskService } from "./../services/GetTaskService";


export class GetTaskController {
    async handle(request: Request, response: Response){
        const service = new GetTaskService()
        const { id } = request.params
        const result = await service.execute(id)
        
        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}