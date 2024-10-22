import Controller from '@ember/controller';
import { service } from '@ember/service';
import RouterService from '@ember/routing/router-service';
import type { ModelFrom } from 'snapp-web/lib/type-utils';
import ApplicationRoute from 'snapp-web/routes/application';
import { tracked } from '@glimmer/tracking';
import ThemeService from 'snapp-web/services/theme';

interface MenuItemModel {
  label: string;
  route: string;
}

interface MenuItem {
  label: string;
  route: string;
  isCurrent: boolean;
}

export default class ApplicationController extends Controller {
  declare model: ModelFrom<ApplicationRoute>;
  @service declare router: RouterService;
  @service declare theme: ThemeService;

  @tracked isMobileMenuOpen = false;

  constructor() {
    super(...arguments);
    // Ensure the theme is set when the application loads
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && this.theme.themes.includes(savedTheme)) {
      this.theme.setTheme(savedTheme);
    }
  }

  get currentRouteName(): string {
    return this.router.currentRouteName;
  }

  get menuItems(): MenuItem[] {
    return (
      this.model.menuItems.map((item: MenuItemModel) => ({
        label: item.label,
        route: item.route,
        isCurrent: this.currentRouteName.split('.')[0] === item.route,
      })) || []
    );
  }

  get profileMenuItems(): MenuItem[] {
    return (
      this.model.profileMenuItems.map((item: MenuItemModel) => ({
        label: item.label,
        route: item.route,
        isCurrent: this.currentRouteName.split('.')[0] === item.route,
      })) || []
    );
  }

  toggleMobileMenu = () => {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  };
}
