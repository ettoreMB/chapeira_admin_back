import { Router } from "express";

const authorizationRouter = Router();

authorizationRouter.post('/login', (req, res) => {
  const { email, password } = req.body;

  return res.send({ email, password });
})

export { authorizationRouter }