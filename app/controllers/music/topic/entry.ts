import Controller from '@ember/controller';
import type { ModelFrom } from 'snapp-web/lib/type-utils';
import type MusicTopicEntryRoute from 'snapp-web/routes/music/topic/entry';

export default class MusicTopicEntryController extends Controller {
  declare model: ModelFrom<MusicTopicEntryRoute>;

  // get vinyl() {
  //   return this.model.data.vinyl;
  // }
}
