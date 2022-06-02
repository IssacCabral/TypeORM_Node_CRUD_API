import { Video } from "../entities/Video";
import dataSource from "../database/data-source";

export class GetAllVideosService{
    async execute(){
        const videoRepository = dataSource.getRepository(Video)
        const videos = await videoRepository.find({
            relations: ['category']
        })

        return videos
    }
}