import { AppService } from './app.service';
import { createUserDto } from './create-user.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    createUser(createUser: createUserDto): void;
    getAnalytics(): import("rxjs").Observable<any>;
}
