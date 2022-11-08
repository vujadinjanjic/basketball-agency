import express, { Request, Response } from "express";
import { getDirectors } from "../services/director.service";

export const directorsRouter = express.Router();

directorsRouter.get("/", async (_req: Request, res: Response) => {
  try {
    const investments = await getDirectors();

    res.status(200).send(investments);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});
