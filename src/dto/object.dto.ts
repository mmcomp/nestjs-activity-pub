import { Attachment } from './attachment.dto';
import { AttributedTo } from './attributed-to.dto';
import { Icon } from './icon.dto';
import { Simple } from './simple.dto';
import { Url } from './url.dto';

export class ActivityObject {
  attachment: Attachment[];
  attributedTo: (string | AttributedTo)[];
  audience: Simple;
  content: string;
  contentMap: { [locale: string]: string };
  name: string;
  nameMap: { [locale: string]: string };
  startTime: string;
  endTime: string;
  generator: Simple;
  icon: Icon | Icon[];
  url: Url[];
}
