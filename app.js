require('dotenv').config();
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import http from 'http';
import mongoose from "mongoose";


/**
 * 
 */
(async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log("Database connected successfully! Starting Server!");
        const app = express();
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use(cors());
        const server = http.createServer(app);
        
        const port = process.env.PORT || 8000;
        server
          .listen(port)
          .on("listening", () => console.log(`App started on port: ${port}`))
          .on("error", (err) =>
            console.log(`An error occured while starting server`, err)
          );
    } catch (error) {
        console.log("Unable to connect with database----->")
        console.log('error', error)
        process.exit(1)
    }
})();
