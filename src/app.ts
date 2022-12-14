import "reflect-metadata";
import "express-async-errors";
import express from "express";

import { addressRouter } from "./routes/address";
import { cardRouter } from "./routes/card";
import { carsRouter } from "./routes/cars";
import { categoryRouter } from "./routes/category";
import { cnhRouter } from "./routes/cnh";
import { loginRouter } from "./routes/login";
import { rentRouter } from "./routes/rent";
import usersRouter from "./routes/users";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/cars", carsRouter);
app.use("/category", categoryRouter);
app.use("/login", loginRouter);
app.use("/rent", rentRouter);
app.use("/profile", usersRouter);
app.use("/profile/address", addressRouter);
app.use("/profile/card", cardRouter);
app.use("/profile/cnh", cnhRouter);

export default app;
