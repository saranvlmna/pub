import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { ChatService } from "./chat/chat.service";
@WebSocketGateway({ cors: true })
export class ChatGateway {
  constructor(private chatService: ChatService) {}
  @WebSocketServer() server: any;

  @SubscribeMessage("newUser")
  async newUser(@MessageBody() data: any) {
    await this.chatService.newUser(data);
    await this.chatService.activeUser(data);
    const users = await this.chatService.findOnlineUser();
    this.server.emit("newUserResponse", users);
  }

  @SubscribeMessage("sendMessage")
  async handleMessage(@MessageBody() data: any) {
    await this.chatService.saveMesssage(data);
    this.server.emit("messageResponse", data);
  }

  @SubscribeMessage("setOffline")
  async setOffline(@MessageBody() data: any) {
    this.chatService.offlineUser(data.userName);
    const users = await this.chatService.findOnlineUser();
    this.server.emit("newUserResponse", users);
  }
}
