import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Socket } from "socket.io";
import { ChatService } from "./chat/chat.service";
@WebSocketGateway({ cors: true })
export class ChatGateway {
  constructor(private chatService: ChatService) {}
  @WebSocketServer() server: any;

  @SubscribeMessage("newUser")
  async newUser(@MessageBody() data: any) {
    await this.chatService.activeUser(data.userName);
    const users = await this.chatService.findOnlineUser();
    this.server.emit("newUserResponse", users);
  }

  @SubscribeMessage("sendMessage")
  async handleMessage(@MessageBody() message: any) {
    this.server.emit("messageResponse", message);
  }

  @SubscribeMessage("setOffline")
  async setOffline(@MessageBody() data: any) {
    this.chatService.offlineUser(data.userName);
    const users = await this.chatService.findOnlineUser();
    this.server.emit("newUserResponse", users);
  }
}
