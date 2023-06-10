import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request } from 'express';
import { ActivityObject } from '../dto/object.dto';

export class ActivityGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    if (
      req.headers['content-type'] !==
        'application/ld+json; profile="https://www.w3.org/ns/activitystreams"' &&
      req.headers['content-type'] !== 'application/activity+json'
    ) {
      throw new HttpException(
        'Method Not Allowed',
        HttpStatus.METHOD_NOT_ALLOWED,
      );
    }

    const body = await this.getBody(req);
    req.activity = JSON.parse(body) as ActivityObject;
    return true;
  }

  getBody(req: Request): Promise<string> {
    return new Promise((resolve) => {
      let rawBody = '';
      req.setEncoding('utf8');

      req.on('data', (chunk) => {
        rawBody += chunk;
      });

      req.on('end', () => {
        resolve(rawBody);
      });
    });
  }
}
