import Controller from '@ember/controller';
import type RouterService from '@ember/routing/router-service';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import type { ModelFrom } from 'snapp-web/lib/type-utils';
import type MusicRoute from 'snapp-web/routes/music';

interface MenuItemModel {
  label: string;
  route: string;
  model: string;
}

interface MenuItem {
  label: string;
  route: string;
  model: string;
  isCurrent: boolean;
}

export default class MusicController extends Controller {
  declare model: ModelFrom<MusicRoute>;
  @service declare router: RouterService;

  @tracked isMobileMenuOpen = false;

  get currentURL(): string {
    return this.router.currentURL;
  }

  get menuItems(): MenuItem[] {
    return (
      this.model.menuItems.map((item: MenuItemModel) => ({
        label: item.label,
        route: item.route,
        model: item.model,
        isCurrent: this.currentURL.split('/')[2] === item.model,
      })) || []
    );
  }

  toggleMobileMenu = () => {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  };
}
