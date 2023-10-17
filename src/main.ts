import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { setup } from './setup';

!(async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug', 'verbose'],
    snapshot: true,
    bodyParser: true,
  });

  setup(app);
  await app.listen(process.env.PORT || 3000, 'localhost', async () => {
    console.log(`Application is running on: ${await app.getUrl()}`);
  });
})()
