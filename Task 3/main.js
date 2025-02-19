require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


mongoose.connect(process.env.DATABASE_URL)
    .then( () => {
        const app = express()
        app.use(cors())
        app.use(express.json());
        app.use(express.urlencoded({extended: false}));

        app.use(express.json());//used to convert request of user to json

        const contactRoute = require('./routes/contact.route');

        app.use('/contact', contactRoute);

        app.use((req, res, next) => {

            return res.status(404).json({
                status: 'NOT FOUND',
                status_code: 404,
                message: 'Requested resource not found.',
                data: {
                    protocol: req.protocol,
                    method: req.method.toUpperCase(),
                    url: req.originalUrl
                }
            });
        });

        app.use((error, req, res, next) => {

            const status_code = error.status || 500;
            return res.status(status_code).json({
                status: 'ERROR',
                status_code: status_code,
                message: error.message,
                data: {
                    error: error.stack,
                    protocol: req.protocol,
                    method: req.method.toUpperCase(),
                    url: req.originalUrl
                }
            });
        });

        app.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`)  )

    }).catch(error => {

        console.log('Error connecting to MongoDB' ,error.message);
    
        console.log(error);
        
    })