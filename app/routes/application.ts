import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return {
      menuItems: [
        { label: 'Dashboard', route: 'index' },
        { label: 'Music', route: 'music' },
        { label: 'Admin', route: 'admin' },
      ],
      profileMenuItems: [
        { label: 'Your Profile', route: 'index' },
        { label: 'Settings', route: 'music' },
        { label: 'Sign out', route: 'admin' },
      ],
    };
  }
}
