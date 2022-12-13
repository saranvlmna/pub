import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
const port = parseInt(process.env.APP_PORT);
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => {
    Logger.log(`Let's talk ${port}`);
  });
}
bootstrap();
