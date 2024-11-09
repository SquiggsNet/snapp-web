import Route from '@ember/routing/route';
import { service } from '@ember/service';
import Store from '@ember-data/store';

function removeLastS(str: string) {
  if (str.endsWith('s')) {
    return str.slice(0, -1);
  }
  return str;
}

export default class MusicTopicEntryRoute extends Route {
  @service declare store: Store;
  async model(params: { entry_id: string }) {
    const parentParams = this.paramsFor('music/topic') as {
      topic_id: string;
    };
    if (parentParams.topic_id && params.entry_id) {
      const data = await this.store.findRecord(
        removeLastS(parentParams.topic_id),
        params.entry_id,
        {
          include: 'artists,vinyls,songs',
        },
      );
      return { topic_id: parentParams.topic_id, data };
    }
  }
}
