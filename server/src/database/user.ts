import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { now, Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  userName: string;

  @Prop()
  socketId: string;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
