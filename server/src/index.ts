import env from "dotenv";
env.config();

import express from "express";
import cors from "cors";
import authRouter from "./routes/auth";
import subscriptionRouter from "./routes/subscription";

const app = express();

app.use(cors());
app.use(express.json());
app.use(authRouter);
app.use(subscriptionRouter);

app.listen(8000, () => {
  console.log("server is started");
});
