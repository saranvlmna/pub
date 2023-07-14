import { Module } from "@nestjs/common";
import { ChatService } from "./chat.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Active, ActiveSchema } from "src/database/liveuser";
import { User, UserSchema } from "src/database/user";
import { Message, MessageSchema } from "src/database/message";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Active.name, schema: ActiveSchema },
      { name: User.name, schema: UserSchema },
      { name: Message.name, schema: MessageSchema }]),
  ],
  providers: [ChatService],
  exports: [ChatService],
})
export class ChatModule {}
