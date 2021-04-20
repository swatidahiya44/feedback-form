const mongoose = require('mongoose')

const FeedbackSchema  = new mongoose.Schema({
    name: {type : String},
    gender: {type : String},
    address: {type : String},
    email: {type : String},
    mobileNumber: {type : Number},
    alternateNumber: {type: Number},
    comment: {type : String},
})

const Feedback = mongoose.model('Feedback', FeedbackSchema)

module.exports = Feedback;