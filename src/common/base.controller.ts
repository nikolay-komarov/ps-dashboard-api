import { Router } from "express";
import { LoggerService } from "../logger/logger.service";
import { IControllerRouter } from "./router.interface";

export abstract class BaseController {
  private _router: Router;
  
  constructor(private logger: LoggerService) {
    this._router = Router();
  }
  
  public get router(): Router {
    return this._router;
  }
  
  protected bindRoutes(routes: IControllerRouter[]) {
    routes.forEach(route => {
      this.logger.info(`[${route.method}] ${route.path}`);
      this.router[route.method](route.path, route.func.bind(this));
    })
  }
}
