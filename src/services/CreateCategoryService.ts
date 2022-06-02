// import { getRepository } from "typeorm" tá preterido, acredito que a doc tenha mudado 
import { Category } from "../entities/Category"
import dataSource from '../database/data-source'

interface CategoryRequest{
    name: string
    description: string
}

export class CreateCategoryService{
    async execute({name, description}: CategoryRequest): Promise<Category | Error>{
        // const repo = getRepository(Category)  
        const categoryRepository = dataSource.getRepository(Category)

        const categoryExists = await categoryRepository.findOne({where: {name}})

        if(categoryExists) return new Error('Category already exists')

        const category = categoryRepository.create({
            name,
            description
        })

        await categoryRepository.save(category)

        return category
    }
}