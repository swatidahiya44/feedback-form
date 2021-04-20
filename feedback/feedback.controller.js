const FeedbackService = require('./feedback.service')   
const express = require('express')
const router = express.Router();

router.post('/create', create);

module.exports = router;

function create(req, res, next){
    console.log("inside feedback controller")
    console.log(req)
    FeedbackService.create(req)
        .then(feedback => res.json(feedback))
        .catch(err => next(err));
}

// exports.post = async function (req, res) {
//     const feedback = await FeedbackService.save(req.body)
//     res.status(200).json({ status: 200, data: feedback, message: "Succesfully fedback posted" });        
// }