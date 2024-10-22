import Route from '@ember/routing/route';
import { service } from '@ember/service';
import Store from '@ember-data/store';

function removeLastS(str: string) {
  if (str.endsWith('s')) {
    return str.slice(0, -1);
  }
  return str;
}

export default class MusicTopicRoute extends Route {
  @service declare store: Store;
  async model(params: { topic_id: string }) {
    if (params.topic_id) {
      const data = await this.store.findAll(removeLastS(params.topic_id));
      return { topic_id: params.topic_id, data };
    }
  }
}
