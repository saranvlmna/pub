import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { now, Document } from "mongoose";

export type ActiveDocument = Active & Document;

@Schema()
export class Active {
  @Prop()
  userName: string;

  @Prop()
  socketId: string;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;
}

export const ActiveSchema = SchemaFactory.createForClass(Active);
