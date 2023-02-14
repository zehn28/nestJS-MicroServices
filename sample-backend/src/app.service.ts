import { Injectable, Inject } from '@nestjs/common';
import { createUserDto } from './create-user.dto';
import { ClientProxy, Transport } from '@nestjs/microservices';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly users: any[] = [];

  constructor(@Inject('COMMUNICATION') private client: ClientProxy,@Inject('ANALYTICS') private readonly analyticsClient: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUser: createUserDto) {
    this.users.push(createUser);
    this.client.emit('user_created', new CreateUserEvent(createUser.email));
    this.analyticsClient.emit('user_created', new CreateUserEvent(createUser.email));
  }

  getAnalytics() {
    return this.analyticsClient.send({ cmd: 'get_analytics'},{});
  }
}
