import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return {
      menuItems: [
        { label: 'Dashboard', route: 'index' },
        { label: 'Music', route: 'music' },
      ],
      profileMenuItems: [
        { label: 'Your Profile', route: 'profile' },
        { label: 'Settings', route: 'settings' },
        { label: 'Sign out', route: 'sign-out' },
      ],
    };
  }
}
