

const calculateAvgRatings=reviews=>{

    const totalRating=reviews?.reduce((acc,item)=>acc+item.rating,0)

    // const avgRating= totalRating===0?"":totalRating===1?totalRating:(totalRating/reviews.length).toFixed(1)
    const avgRating= totalRating===0?null:(totalRating/reviews.length).toFixed(1)

    // const avgRating=reviews?(totalRating/reviews.length).toFixed(1):'Not rated'
   

    return avgRating
        
     
}

export default calculateAvgRatings