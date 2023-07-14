import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { now, Document } from "mongoose";

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  @Prop()
  name: string;

  @Prop()
  socketId: string;

  @Prop()
  message: string;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
