import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import ThemeService from 'snapp-web/services/theme';

export interface ThemeSwitcherSignature {
  // The arguments accepted by the component
  Args: {};
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class ThemeSwitcherComponent extends Component<ThemeSwitcherSignature> {
  @service declare theme: ThemeService;

  get themes(): string[] {
    return this.theme.themes;
  }

  @action
  setTheme(theme: string): void {
    this.theme.setTheme(theme);
  }
}
