import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Active, ActiveDocument } from "src/database/liveuser";

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Active.name) private liveModel: Model<ActiveDocument>
  ) {}

  async activeUser(userName: any) {
    return this.liveModel.create({
      userName,
    });
  }

  async offlineUser(userName: any) {
    return this.liveModel.deleteOne({ userName });
  }

  async findOnlineUser() {
    return this.liveModel.find();
  }
}
