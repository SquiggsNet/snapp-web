import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  // namespace = 'v1';

  get host() {
    return 'http://localhost:3000';
    // return 'https://snapp-api.squiggs.net';
  }
}
