import express, { Express } from 'express';
import { Server } from 'http';
import { inject, injectable } from 'inversify';
import { ExceptionFilter } from './errors/exception.filter';
import { LoggerService } from './logger/logger.service';
import { TYPES } from './types';
import { UserController } from './users/user.controller';
import 'reflect-metadata';

@injectable()
export class App {
	app: Express;
	port: number = 3000;
	server: Server;

	constructor(
		@inject(TYPES.ILogger) private _logger: LoggerService,
		@inject(TYPES.UserController) private _userController: UserController,
		@inject(TYPES.ExceptionFilter) private _exceptionFilter: ExceptionFilter,
	) {
		this.app = express();
	}

	useRoutes(): void {
		this.app.use('/users', this._userController.router);
	}

	useExceptionFilter(): void {
		this.app.use(this._exceptionFilter.catch.bind(this._exceptionFilter));
	}

	public async init(): Promise<void> {
		this.useRoutes();
		this.useExceptionFilter();
		this.server = this.app.listen(this.port);

		this._logger.info(`App listening on port ${this.port}`);
	}
}
