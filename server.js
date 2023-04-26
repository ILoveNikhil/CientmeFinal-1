import { app } from "./app.js";
import { connectDB } from "./config/db.js";
import cloudinary from "cloudinary";

connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
