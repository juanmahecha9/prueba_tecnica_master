import * as dotenv from "dotenv";
dotenv.config();

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  });

  const config = new DocumentBuilder()
    .setTitle("API")
    .setDescription("Nest.js service API.")
    .setVersion("1.0")
    .addTag("Endpoints availables")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/", app, document);

  await app.listen(port, () => {
    console.debug(`App running on port: ${port}`);
  });
}
bootstrap();
