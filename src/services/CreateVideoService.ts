import { Video } from "../entities/Video";
import { Category } from "../entities/Category";
import dataSource from "../database/data-source";

interface VideoRequest{
    name: string
    description: string
    duration: number
    category_id: string
}

export class CreateVideoService{
    async execute({name, description, duration, category_id}: VideoRequest): Promise<Video | Error>{
        /**lembrando que o ideal, seria nós termos esses repositórios
         * em uma camada isolada */
        const videoRepository = dataSource.getRepository(Video)
        const categoryRepository = dataSource.getRepository(Category)

        if(!await categoryRepository.findOne({where: {id: category_id}})){
            return new Error('Category does not exists')
        }

        const video = videoRepository.create({name, description, duration, category_id})
        
        await videoRepository.save(video)

        return video
    }
}