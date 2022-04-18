const express = require('express');
const router = require('express').Router()

function callback(req, res) {
    console.log('callback place')
    res.send('everything is Ok')
}


const app = express();

app.use(express.json());

//app.use(middle)
//app.use(middle2)
//app.use(middle3)
//app.use(middle4)



app.use('/', router.get('/', [middle3, middle4, middle2] ,callback));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))



function middle(req, res, next) {
    console.log('this is the middle work!!!')
    next()
}

function middle2(req, res, next) {
    console.log('this is the middle222 work!!!')
    next()
}

function middle3(req, res, next) {
    console.log('this is the middle333 work!!!')
    next()
}

function middle4(req, res, next) {
    console.log('this is the middle444 work!!!')
    next()
}