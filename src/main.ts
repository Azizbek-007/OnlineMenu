import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { setup } from './setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
    bodyParser: true,
    cors: true
  });

  setup(app);

  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    credentials: true,
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
