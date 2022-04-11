import { Router } from "express";

const servicesRoutes = Router();

servicesRoutes.get("/:sigla", (req, res) => {
  const { sigla } = req.params;
  res.send('Hi',)
})

export { servicesRoutes };