import { Request, Response, Router, NextFunction } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleController = new MotorcycleController();

const motorcycleRouter = Router();

motorcycleRouter.post('/', (req: Request, res: Response, next: NextFunction) =>
  motorcycleController.createMotorCycle(req, res, next)
);

motorcycleRouter.get('/:id', (req: Request, res: Response, next: NextFunction) =>
  motorcycleController.findMotorById(req, res, next)
);

motorcycleRouter.get('/', (req: Request, res: Response, next: NextFunction) =>
  motorcycleController.findAllMotoCycles(req, res, next)
);

export default motorcycleRouter;