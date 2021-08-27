import cors from "cors";
import express, { Request, Response, NextFunction } from "express";

import "express-async-errors";
import "reflect-metadata";
import "@shared/container";
import { AppErrors } from "@shared/errors/AppErrors";
import createConnection from "@shared/infra/typeorm";

import { router } from "./routes";

createConnection();

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppErrors) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    message: `internal server Error - ${err.message}`,
  });
  next();
});

export { app };
