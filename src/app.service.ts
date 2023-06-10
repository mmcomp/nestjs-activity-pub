import { Injectable } from '@nestjs/common';
import { ActivityObject } from './dto/object.dto';

@Injectable()
export class AppService {
  inboxReceive(activity: ActivityObject): Promise<unknown> {
    console.log(activity);
    return null;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
