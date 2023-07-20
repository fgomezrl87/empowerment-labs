import { Handler, Context } from 'aws-lambda';
import { Server } from 'http';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as serverlessExpress from 'aws-serverless-express';
import * as express from 'express';

let cachedServer: Server;

async function bootstrapServer(): Promise<Server> {
  if (!cachedServer) {
    const expressApp = express();
    const adapter = new ExpressAdapter(expressApp);
    const app = await NestFactory.create(AppModule, adapter);
    await app.init();
    cachedServer = serverlessExpress.createServer(expressApp);
  }
  return cachedServer;
}

export const handler: Handler = async (event: any, context: Context) => {
  cachedServer = await bootstrapServer();
  return serverlessExpress.proxy(cachedServer, event, context, 'PROMISE').promise;
}
