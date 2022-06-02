import { Router } from "express";
import { CreateVideoController } from "../controllers/CreateVideoController";
import { GetAllVideosController } from "../controllers/GetAllVideosController";

const videosRouter = Router()

videosRouter.post('/videos', new CreateVideoController().handle)
videosRouter.get('/videos', new GetAllVideosController().handle)

export default videosRouter