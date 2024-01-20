if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const userRoutes = require('./routes/user');

const dbUrl = process.env.ATLAS_URL;
mongoose.connect(dbUrl)
    .then(() => {
        console.log('mongo database connected');
    })
    .catch((err) => {
        console.log('mongo connection error!!');
        console.log(err);
    })



app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api/v1', userRoutes);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})