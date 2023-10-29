import express from "express";
import { config } from "dotenv";
import routes from "./routes/paymentRoutes.js";
import cors from "cors";

config({path:"./config/config.env"});
export const app= express();

app.use(cors);

app.use("/api", routes);

