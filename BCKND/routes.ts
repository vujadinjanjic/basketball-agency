import { Router } from "express";
import { playersRouter } from "./routes/players.route";
import { clubsRouter } from "./routes/clubs.route";
import { directorsRouter } from "./routes/directors.route";

export const routes = Router();

routes.use("/players", playersRouter);
routes.use("/clubs", clubsRouter);
routes.use("/directors", directorsRouter);
