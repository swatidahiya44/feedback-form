const express = require('express');
const router = express.Router();
const emailService = require('./emails.service');

router.post('/sendMail', sendFeedbackMail);                                                                                                                                                                                                                                                                                                                                                                                                            

module.exports = router;

function sendFeedbackMail(req, res, next) {
    emailService.sendFeedbackMail(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}