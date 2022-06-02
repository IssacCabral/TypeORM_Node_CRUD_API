import {Request, Response} from 'express'
import { CreateCategoryService } from '../services/CreateCategoryService'

export class CreateCategoryController{
    async handle(request: Request, response: Response){
        const {name, description} = request.body
        const dataMandatory = ["name", "description"]
        const errors: Array<any> = []

        dataMandatory.forEach(element => {
            if(!request.body[element]){
                errors.push({
                    field: element,
                    message: `The ${element} field is required`
                })
            }
        })

        if(errors.length > 0){return response.json({errors})}

        const service = new CreateCategoryService()
        const result = await service.execute({name, description})

        return result instanceof Error ? response.status(400).json(result.message) : response.status(201).json(result)
    }
}