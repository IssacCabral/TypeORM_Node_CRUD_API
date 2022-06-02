import {Router} from 'express'
import { CreateCategoryController } from '../controllers/CreateCategoryController'
import { GetAllCategoriesController } from '../controllers/GetAllCategoriesController'
import { DeleteCategoryController } from '../controllers/DeleteCategoryController'
import { UpdateCategoryController } from '../controllers/UpdateCategoryController'

const categoriesRouter = Router()

categoriesRouter.post('/categories', new CreateCategoryController().handle)
categoriesRouter.get('/categories', new GetAllCategoriesController().handle)
categoriesRouter.put('/categories/:id', new UpdateCategoryController().handle)
categoriesRouter.delete('/categories/:id', new DeleteCategoryController().handle)

export default categoriesRouter
