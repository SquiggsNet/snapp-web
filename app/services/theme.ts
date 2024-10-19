import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ThemeService extends Service {
  @tracked currentTheme: string = 'light';

  themes: string[] = ['light', 'dark', 'theme1', 'theme2', 'theme3'];

  @action
  setTheme(theme: string): void {
    if (this.themes.includes(theme)) {
      this.currentTheme = theme;
      document.documentElement.className = theme;
      localStorage.setItem('theme', theme);
    }
  }

  constructor() {
    super(...arguments);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && this.themes.includes(savedTheme)) {
      this.setTheme(savedTheme);
    }
  }
}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:theme')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('theme') declare altName: ThemeService;`.
declare module '@ember/service' {
  interface Registry {
    theme: ThemeService;
  }
}
