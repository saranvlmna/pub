import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Active, ActiveDocument } from "src/database/liveuser";
import { Message, MessageDocument } from "src/database/message";
import { User, UserDocument } from "src/database/user";

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Active.name) private liveModel: Model<ActiveDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>
  ) {}

  async newUser(data: any) {
    return this.userModel.create({
      userName:data.userName,
      socketId:data.socketID,
    });
  }

  async activeUser(data: any) {
    return this.liveModel.create({
      userName:data.userName,
      socketId:data.socketID,
    });
  }

  async saveMesssage(data: any) {
    return this.messageModel.create({
      name:data.name,
      socketId:data.socketID,
      message:data.text
    });
  }

  async offlineUser(userName: any) {
    return this.liveModel.deleteOne({ userName });
  }

  async findOnlineUser() {
    return this.liveModel.find();
  }
}
