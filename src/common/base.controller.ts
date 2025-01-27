import { Router } from 'express';
import { injectable } from 'inversify';
import { ILogger } from '../logger/logger.interface';
import { IControllerRouter } from './router.interface';

@injectable()
export abstract class BaseController {
	private readonly _router: Router;

	constructor(protected _logger: ILogger) {
		this._router = Router();
	}

	public get router(): Router {
		return this._router;
	}

	protected bindRoutes(routes: IControllerRouter[]): void {
		routes.forEach((route) => {
			this._logger.info(`[${route.method}] ${route.path}`);
			this.router[route.method](route.path, route.func.bind(this));
		});
	}
}
