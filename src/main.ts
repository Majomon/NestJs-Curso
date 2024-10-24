import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Validaciones
  app.useGlobalPipes(
    new ValidationPipe({
      // Todos los campos extras que se reciba por request y no los este esperando no se toman en cuenta
      whitelist: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Documentacion')
    .setDescription('Documentacion del curso de Nest que hice')
    .setVersion('1.0')
    // .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
