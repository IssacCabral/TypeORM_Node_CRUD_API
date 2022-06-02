import { Router } from "express";
import categoriesRouter from "./CategoriesRoutes";

const mainRouter = Router()

export default mainRouter
                    .use(categoriesRouter)