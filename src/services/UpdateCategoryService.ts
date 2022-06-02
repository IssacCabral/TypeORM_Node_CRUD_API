import { Category } from "../entities/Category";
import dataSource from "../database/data-source";

interface CategoryUpdateRequest{
    id: string
    name: string
    description: string
}

export class UpdateCategoryService{
    async execute({id, name, description}: CategoryUpdateRequest){
        const categoryRepository = dataSource.getRepository(Category)

        const category = await categoryRepository.findOne({where: {id}})

        if(!category){
            return new Error('Category does not exists')
        }

        await categoryRepository.update({id}, {name: name, description: description})

        return {data: "Updated category!"}
    }
}