import { Category } from "../entities/Category";
import dataSource from "../database/data-source";


export class GetAllCategoriesService{
    async execute(){
        const categoryRepository = dataSource.getRepository(Category)
        const categories = await categoryRepository.find()
        
        return categories
    }
}