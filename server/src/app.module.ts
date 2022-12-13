import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ChatModule } from "./chat/chat.module";
import { ChatGateway } from "./chatgateway";
import { MongooseModule } from "@nestjs/mongoose";
@Module({
  imports: [
    ConfigModule.forRoot(),
    ChatModule,
    MongooseModule.forRoot("mongodb://localhost/lets_talk"),
  ],
  providers: [ChatGateway],
})
export class AppModule {}
