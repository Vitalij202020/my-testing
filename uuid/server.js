const express = require('express');
const uuid = require('uuid')


const app = express();

app.use(express.json());

app.use('/', (req, res) => {
    res.json('Hello from uuid!')
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))