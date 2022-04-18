const express = require('express');
const Joi = require('joi')

const app = express();

app.use(express.json());

app.use('/', (req, res) => {
    console.log(req.body)

    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required()
    })

    const {error} = schema.validate(req.body)
    console.log("here - ", error.details)
    if (error) {
        console.log(error)
        res.send(error.details[0].message)
    }
    //console.log()
    res.send('successfully posted data!!')
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
