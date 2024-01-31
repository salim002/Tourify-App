import express from 'express'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'
import { createBooking, getAllBooking, getBooking } from '../controllers/bookingController.js'

const router=express.Router()


// router.post('/',verifyUser,createBooking)       // not working
router.post('/',createBooking)

// router.get('/id',verifyUser,getBooking)   // not working
router.get('/:id',getBooking)

router.get('/',verifyAdmin,getAllBooking)




export default router