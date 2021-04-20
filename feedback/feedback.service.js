const Feedback = require("./feedback.model")
const emailService = require('../emails/emails.service')
module.exports = {create};

exports.save = async function (object) {
    const feedback = new Feedback(object);
    return await feedback.save();
}
async function create(req){
    var feedbackParam = req.body;
    console.log(req.body);
    // var feedbackParam = {name : "swati"};
    const feedback = new Feedback(feedbackParam);
    await feedback.save();
    emailService.sendFeedbackMail(feedbackParam)
    
}