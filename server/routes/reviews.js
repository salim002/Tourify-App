import express from 'express'
import { createReview } from '../controllers/reviewController.js'
import { verifyUser } from '../utils/verifyToken.js'

const router=express.Router()


// router.post('/:tourId',verifyUser,createReview)  ->not working
router.post('/:tourId',createReview)



export default router