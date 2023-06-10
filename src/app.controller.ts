import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ActivityGuard } from './guard/activity.guard';
import { ActivityRequest } from './request/activity.request';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(ActivityGuard)
  @Post('inbox')
  async receive(@Req() req: ActivityRequest): Promise<unknown> {
    const { activity } = req;
    return this.appService.inboxReceive(activity);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
