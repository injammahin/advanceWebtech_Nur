import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { RegistrationModule } from './registration/registration.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  const registration = await NestFactory.create(RegistrationModule);
  await registration.listen(4000);
}

bootstrap();
