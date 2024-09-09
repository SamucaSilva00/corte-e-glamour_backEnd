import express from 'express'
import { servicesController } from './controllers/servicesController'
import { employeesController } from './controllers/employeesController'
import { userController } from './controllers/userController'

const router = express.Router()

router.post('/services', servicesController.save)
router.get('/services', servicesController.index)
router.put('/services/:id', servicesController.update)
router.delete('/services/:id', servicesController.delete)

router.post('/employees', employeesController.save)
router.get('/employees', employeesController.index)
router.put('/employees/:id', employeesController.update)
router.delete('/employees/:id', employeesController.delete)

router.post('/employeesServices', employeesController.addService)

router.post('/register', userController.save)


export { router }