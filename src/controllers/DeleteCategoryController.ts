import {Request, Response} from 'express'
import { DeleteCategoryService } from '../services/DeleteCategoryService'


export class DeleteCategoryController{
    async handle(request: Request, response: Response){
        const {id} = request.params

        const service = new DeleteCategoryService()
        const result = await service.execute(id)
        
        return result instanceof Error ? response.status(400).json(result.message) : response.status(200).end()
    }
}