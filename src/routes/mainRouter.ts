import { Router } from "express";
import categoriesRouter from "./CategoriesRoutes";
import videosRouter from "./VideosRoutes";

const mainRouter = Router()

export default mainRouter
                    .use(categoriesRouter)
                    .use(videosRouter)