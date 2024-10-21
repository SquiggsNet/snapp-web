import Route from '@ember/routing/route';

export default class MusicRoute extends Route {
  model() {
    return {
      menuItems: [
        { label: 'Vinyl', href: '#', route: 'vinyl' },
        { label: 'Artist', href: '#', route: 'artist' },
        { label: 'Song', href: '#', route: 'song' },
      ],
    };
  }
}
