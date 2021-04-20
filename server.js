
const Form = require("./feedback/feedback.model")
const {post} = require('./feedback/feedback.controller');
const express = require('express');

const bodyParser = require("body-parser");
const cors = require('cors')
const mongoose = require('mongoose');

const port = 3000;
const app = express();
var http = require('http').Server(app);
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect("mongodb://localhost:27017/form");


const catchErrors = action => (req, res, next) => action(req, res).catch(next)

app.use('/feedback', require('./feedback/feedback.controller'))
app.use('/emails', require('./emails/emails.controller'));
// app.post('/api/feedback', catchErrors(post));
// app.post('/form', async (req, res) => {
//     const formValues = {name : 'swati', gender : 'female'}
//     const form = new Form(formValues);
//     return await form.save();

// })


http.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
// var server = http.listen(port, function () {
//     console.log("server started listen on :" + port)
// });
