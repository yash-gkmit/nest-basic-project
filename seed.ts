import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { UserSeeder } from './seeders/users.seeder';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const dataSource = app.get(DataSource);
  await new UserSeeder(dataSource).run();
  await app.close();
}

bootstrap();
