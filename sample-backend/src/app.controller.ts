import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { createUserDto } from './create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createUser(@Body() createUser: createUserDto) {
    this.appService.createUser(createUser);
  }

  @Get('analytics')
  getAnalytics() {
    return this.appService.getAnalytics();
  }
}
