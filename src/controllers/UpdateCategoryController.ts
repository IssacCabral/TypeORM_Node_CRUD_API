import {Request, Response} from 'express'
import { UpdateCategoryService } from '../services/UpdateCategoryService'

export class UpdateCategoryController{
    async handle(request: Request, response: Response){
        const {id} = request.params
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

        if(errors.length > 0) return response.json(errors)

        const service = new UpdateCategoryService()
        const result = await service.execute({id, name, description})

        return result instanceof Error ? response.status(400).json(result.message) : response.status(200).json(result.data)
    }
}