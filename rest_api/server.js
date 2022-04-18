const express = require('express');
const usersRoutes = require('./rest_api/usersRoutes')


const app = express();

app.use(express.json());

app.use('/', usersRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))