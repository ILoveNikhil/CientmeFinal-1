import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.js";
import postRouter from "./routes/post.js";
// import reelRouter from "./routes/reel.js";
// import storiesRouter from "./routes/storie.js";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";

export const app = express();

config({
  path: "./config/.env",
});

// Using Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Using Routes
app.use("/api/v1", userRouter);
app.use("/api/v1", postRouter);
// app.use("/api/v1", reelRouter);
// app.use("/api/v1", storiesRouter);

app.get("/", (req, res) => {
  res.send("Home And Working");
});

// Using Error Middleware
app.use(errorMiddleware);
