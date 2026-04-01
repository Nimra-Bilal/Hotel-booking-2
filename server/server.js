import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebHooks.js";
dotenv.config();

connectDB();
const app = express();

app.use(cors());

app.use(express.json());
app.use(clerkMiddleware())

// api to listen clerkWebhooks

app.post("/api/clerk/webhooks", clerkWebhooks);

// api to listen clerkwebhooks
app.use("/api/clerk", clerkWebhooks);

app.get("/", (req, res) => {
    res.send("Hello API is Working! blaaaaaa");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// app.use(cookieParser());
// app.use(express.json());
// app.use(fileUpload({ useTempFiles: true }));
// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUD_API_KEY,
//     api_secret: process.env.CLOUD_API_SECRET,
// }); 
