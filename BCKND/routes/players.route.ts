import express, {Request, Response} from 'express';
import { getPlayers } from '../services/player.service';

export const playersRouter = express.Router();
 
playersRouter.get("/", async (_req: Request, res: Response) => {
    try {
      const investments = await getPlayers();
  
      res.status(200).send(investments);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  });
  