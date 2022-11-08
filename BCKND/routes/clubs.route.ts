import express, { Request, Response } from "express";
import { getClubs } from "../services/club.service";

export const clubsRouter = express.Router();

clubsRouter.get("/", async (_req: Request, res: Response) => {
  try {
    const investments = await getClubs();

    res.status(200).send(investments);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});
