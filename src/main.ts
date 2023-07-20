import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as serverless from 'aws-serverless-express';

async function bootstrap() {
  const expressApp = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  await app.init();
  
  const server = serverless.createServer(expressApp);
  
  exports.handler = (event, context) => { 
    console.log(`Incoming event: ${JSON.stringify(event)}`);
    return serverless.proxy(server, event, context, 'PROMISE').promise;
  };
}

bootstrap();
