// import express from  "express"
// import cors from  "cors"
// import dotenv from "dotenv"
// import { dbConnection } from "./database/dbConnection.js";



// const app = express();
// dotenv.config({path: "./config/config.env"})

// app.use(
//     cors({
//        origin: [process.env.FRONTEND_URL],
//        methods: ["POST"],
//        credentials: true, 
//     })
// );

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// dbConnection();


// export default app;

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";

const app = express();

// ✅ Load environment variables
dotenv.config({ path: "./config/config.env" });

// ✅ CORS Configuration
app.use(
    cors({
       origin: [process.env.FRONTEND_URL],
       methods: ["GET", "POST", "PUT", "DELETE"],
       credentials: true, 
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Connect to MongoDB
dbConnection();

export default app;
