import { Request, Response, NextFunction } from "express";
import { LoggerService } from "../logger/logger.service";
import { IExceptionFilter } from "./exception.filter.interface";
import { HTTPError } from "./http-error";

export class ExceptionFilter implements IExceptionFilter {
  constructor(private readonly _logger: LoggerService) {}
  
  catch(err: HTTPError | Error, _req: Request, res: Response, _next: NextFunction): void {
    if (err instanceof HTTPError) {
      this._logger.error(`[${err.context}] Ошибка ${err.statusCode}: ${err.message}`);
      res.status(err.statusCode).send({ err: err.message });
    } else {
      this._logger.error(`${err.message}`);
      res.status(500).send({ err: err.message });
    }
  };
}
