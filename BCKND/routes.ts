import { Router } from "express";
import { playersRouter } from "./routes/players.route";
import { clubsRouter } from "./routes/clubs.route";

export const routes = Router();

routes.use("/players", playersRouter);
routes.use("/clubs", clubsRouter);
