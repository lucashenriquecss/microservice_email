// src/index.js
import express, { Application } from "express";
import dotenv from "dotenv";
import { Connection } from "./config/database";
import route from "./routers/index";
dotenv.config();

const app : Application  = express();
const port = process.env.PORT || 3000;

app.use(route);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const start = async (): Promise<void> => {
  try {
    Connection
    .initialize()
    .then(async() => {
        console.log("Database ok.")
        app.listen(3000, () => { 
          console.log(`Server started on port ${port}`);
        });
    })
    .catch((err) => {
        console.error("Error database", err)
    })
  } catch (error) {
    console.error(error); 
    process.exit(1); 
  }
};

 start();