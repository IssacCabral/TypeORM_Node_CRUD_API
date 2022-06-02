import {Request, Response} from 'express'
import { CreateVideoService } from '../services/CreateVideoService'

export class CreateVideoController{
    async handle(request: Request, response: Response){
        const {name, description, duration, category_id} = request.body
        const dataMandatory = ["name", "description", "duration", "category_id"]
        const errors: Array<any> = []

        dataMandatory.forEach(element => {
            if(!request.body[element]){
                errors.push({
                    field: element,
                    message: `The ${element} field is required`
                })
            }
        })

        if(errors.length > 0) return response.json(errors)

        const service = new CreateVideoService()
        const result = await service.execute({name, description, duration, category_id})

        return result instanceof Error ? response.status(400).json(result.message) : response.status(201).json(result)
    }
}