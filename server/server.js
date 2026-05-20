import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebHooks.js";
import userRouter from "./routes/userRoutes.js";
import hotelRouter from "./routes/hotelRoutes.js";
import connectCloudinary from "./configs/cloudinary.js";
import roomRouter from "./routes/roomRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

dotenv.config();

connectDB();
connectCloudinary();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://hotel-booking-2-zeta.vercel.app"
  ],
  credentials: true
}));


app.use(express.json());
app.use(clerkMiddleware())

// api to listen clerkWebhooks

app.post("/api/clerk/webhooks", clerkWebhooks);

// api to listen clerkwebhooks
app.use("/api/clerk", clerkWebhooks);

app.get("/", (req, res) => {
    res.send("Hello API is Working! blaaaaaa");
});
app.use("/api/user", userRouter);
app.use("/api/hotel", hotelRouter);
app.use("/api/room", roomRouter);
app.use("/api/booking", bookingRouter);


const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

export default app;


// app.use(cookieParser());
// app.use(express.json());
// app.use(fileUpload({ useTempFiles: true }));
// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUD_API_KEY,
//     api_secret: process.env.CLOUD_API_SECRET,
// }); 
