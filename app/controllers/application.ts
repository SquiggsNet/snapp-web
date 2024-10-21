import Controller from '@ember/controller';
import { service } from '@ember/service';
import Store from '@ember-data/store';
import RouterService from '@ember/routing/router-service';
import type { ModelFrom } from 'snapp-web/lib/type-utils';
import ApplicationRoute from 'snapp-web/routes/application';
import { tracked } from '@glimmer/tracking';

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
  @service declare store: Store;
  @service declare router: RouterService;

  @tracked isMobileMenuOpen = false;

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
