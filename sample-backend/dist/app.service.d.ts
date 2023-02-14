import { createUserDto } from './create-user.dto';
import { ClientProxy } from '@nestjs/microservices';
export declare class AppService {
    private client;
    private readonly analyticsClient;
    private readonly users;
    constructor(client: ClientProxy, analyticsClient: ClientProxy);
    getHello(): string;
    createUser(createUser: createUserDto): void;
    getAnalytics(): import("rxjs").Observable<any>;
}
