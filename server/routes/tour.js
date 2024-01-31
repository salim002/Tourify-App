

import express from "express"
import { createTour, updateTour, deleteTour, getSingleTour, getAllTour, getTourBySearch, getFeaturedTours, getTourCount } from "../controllers/tourController.js"
import { verifyAdmin } from "../utils/verifyToken.js"


const router=express.Router()


router.post('/',verifyAdmin,createTour)

router.put('/:id',verifyAdmin,updateTour)

router.delete('/:id',verifyAdmin,deleteTour)

router.get('/',getAllTour)

router.get('/:id',getSingleTour)

router.get('/search/getTourBySearch',getTourBySearch)
router.get('/search/getFeaturedTours',getFeaturedTours)
router.get('/search/getTourCount',getTourCount)
export default router;