import Route from '@ember/routing/route';

export default class MusicTopicRoute extends Route {
  model(params: { topic_id: string }) {
    return { topic_id: params.topic_id };
  }
}
