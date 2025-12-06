import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import connectDB from "./configs/db.js";
import "dotenv/config";
import userRouter from "./routes/userRoute.js";
import sellerRouter from "./routes/sellerRoute.js";
import connectCloudinary from "./configs/cloudinary.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import addressRouter from "./routes/addressRoute.js";
import orderRouter from "./routes/orderRoutes.js";
import { stripeWebHooks } from "./controllers/orderController.js";
import contactRouter from "./routes/contactRoute.js";

const app = express();
const port = process.env.PORT || 4000;

await connectDB();
await connectCloudinary();

const allowedOrigins = [
  "http://localhost:5173",
  "https://greencartmall.netlify.app",
];

// 1. global middleware FIRST
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

// 2. normal routes
app.get("/", (req, res) => res.send("API Working"));
app.use("/api/user", userRouter);
app.use("/api/seller", sellerRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/address", addressRouter);
app.use("/api/order", orderRouter);
app.use("/api/contact", contactRouter);

// 3. Stripe webhook LAST (must use raw body)
app.post(
  "/stripe",
  express.raw({ type: "application/json" }),
  stripeWebHooks
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
