import { myController } from './../controllers/myController.controller'
import express, { Router } from 'express'

const router: Router = express.Router()

router.get('/', myController)

export default router
