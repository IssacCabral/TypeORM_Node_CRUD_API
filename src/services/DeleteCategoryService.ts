import { Category } from "../entities/Category";
import dataSource from "../database/data-source";

export class DeleteCategoryService{
    async execute(id: string){
        const categoryRepository = dataSource.getRepository(Category)

        if(!await categoryRepository.findOne({where: {id}})){
            return new Error('Category does not exists')
        }

        await categoryRepository.delete(id)
    }
}