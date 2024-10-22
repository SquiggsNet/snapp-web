import Route from '@ember/routing/route';

export default class MusicRoute extends Route {
  model() {
    return {
      menuItems: [
        { label: 'Vinyl', href: '#', route: 'music.topic', model: 'vinyls' },
        { label: 'Artist', href: '#', route: 'music.topic', model: 'artists' },
        { label: 'Song', href: '#', route: 'music.topic', model: 'songs' },
      ],
    };
  }
}
