const express = require('express');
const app = express();
const studentRoute = require('./fold/student.js')
const facultyRoute = require('./fold/faculty')
const bookRoute = require('./fold/book')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://sbs:sbs123@sbs.1t2vg6z.mongodb.net/?retryWrites=true&w=majority')

mongoose.connection.on('error',error=>{
    console.log('conncetion failed');
})

mongoose.connection.on('connected',connected=>{
    console.log('connected with db');
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/student',studentRoute)
app.use('/faculty',facultyRoute)
app.use('/book',bookRoute)



app.use((req,res,next)=>{
    res.status(404).json({
     error:'bad request'

    })
})

app.use((req,res,next)=>{
    res.status(200).json({
     message:'app is running'

    })
})

module.exports = app;