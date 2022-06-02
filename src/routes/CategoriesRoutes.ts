import {Router} from 'express'
import { CreateCategoryController } from '../controllers/CreateCategoryController'

const categoriesRouter = Router()

categoriesRouter.post('/categories', new CreateCategoryController().handle)

export default categoriesRouter
