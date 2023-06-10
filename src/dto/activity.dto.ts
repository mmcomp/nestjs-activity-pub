import { ActivityType } from '../enum/activity-type.enum';
import { Actor } from './actor.dto';

export class Activity {
  '@context': unknown;
  type: ActivityType;
  summary: string;
  actor: Actor;
  object: unknown;
}
