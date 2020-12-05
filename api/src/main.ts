import { NestFactory } from '@nestjs/core';
import { EtablissementModule } from './etablissement.module';

async function bootstrap() {
  const app = await NestFactory.create(EtablissementModule);
  await app.listen(3000);
}
bootstrap();
