import { Request } from 'express';
import { ActivityObject } from '../dto/object.dto';

export type ActivityRequest = Request & { activity: ActivityObject };
