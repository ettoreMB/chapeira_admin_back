import cors from "cors";

import { app } from "./App";

app.use(cors());
app.listen(3333, '0.0.0.0', () => {
  console.log("server is Running on Port 3333");
});
