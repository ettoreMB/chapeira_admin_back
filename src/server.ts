import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors'
import 'express-async-errors';
import 'reflect-metadata';
import './database';
import './shared/container'
import { router } from './routes';
import { AppErrors } from './errors/AppErrors';



const app  = express();

app.use(cors())

app.use(express.json());



app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof AppErrors) {
    return res.status(err.statusCode).json({
      message: err.message
    })

  }

  return res.status(500).json({
    message: `internal server Error - ${err.message}`,
  })

}
)

app.listen(3333 , () => {
  console.log('server is Running on Port 3333');
})