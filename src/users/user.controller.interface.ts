import { NextFunction, Request, Response } from "express";

export interface IUserController {
  signin: (_req: Request, res: Response, _next: NextFunction) => void;
  signup: (_req: Request, res: Response, _next: NextFunction) => void;
}
