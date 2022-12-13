import { Module } from "@nestjs/common";
import { ChatService } from "./chat.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Active, ActiveSchema } from "src/database/liveuser";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Active.name, schema: ActiveSchema }]),
  ],
  providers: [ChatService],
  exports: [ChatService],
})
export class ChatModule {}
