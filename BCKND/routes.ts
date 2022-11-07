import  { Router} from "express";
import { playersRouter } from "./routes/players.route";

export const routes = Router();

routes.use("/players", playersRouter)
