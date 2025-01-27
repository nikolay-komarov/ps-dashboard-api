import { Request, Response, NextFunction } from 'express';
import { inject, injectable } from 'inversify';
import { ILogger } from '../logger/logger.interface';
import { TYPES } from '../types';
import { IExceptionFilter } from './exception.filter.interface';
import { HTTPError } from './http-error';
import 'reflect-metadata';

@injectable()
export class ExceptionFilter implements IExceptionFilter {
	constructor(@inject(TYPES.ILogger) protected _logger: ILogger) {}

	catch(err: HTTPError | Error, _req: Request, res: Response, _next: NextFunction): void {
		if (err instanceof HTTPError) {
			this._logger.error(`[${err.context}] Ошибка ${err.statusCode}: ${err.message}`);
			res.status(err.statusCode).send({ err: err.message });
		} else {
			this._logger.error(`${err.message}`);
			res.status(500).send({ err: err.message });
		}
	}
}
