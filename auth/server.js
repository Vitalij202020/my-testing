const express = require('express');


const app = express();

app.use(express.json());

app.use('/', (req, res) => {
    res.json('Hello gays!')
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))