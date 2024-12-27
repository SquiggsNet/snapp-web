import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Store from '@ember-data/store';
import FetchService from 'snapp-web/services/fetch';

interface SearchResult {
  id: string;
  title: string;
  artist: string;
  year?: string;
  type?: string;
}

export interface MusicSearchSignature {
  Args: {};
  Blocks: {
    default: [];
  };
  Element: null;
}

export default class MusicSearchComponent extends Component<MusicSearchSignature> {
  @service declare store: Store;
  @service declare fetch: FetchService;

  @tracked query = '';
  @tracked searchResults: SearchResult[] = [];
  @tracked isLoading = false;
  @tracked error: string | null = null;

  @action
  async search(): Promise<void> {
    if (!this.query.trim()) return;

    this.isLoading = true;
    this.error = null;
    try {
      const results = await this.fetch.get(
        `/api/music/search?q=${encodeURIComponent(this.query)}`,
      );
      this.searchResults = results ?? [];
    } catch (err) {
      this.error = err instanceof Error ? err.message : 'Search failed';
    } finally {
      this.isLoading = false;
    }
  }

  @action
  async importAlbum(result: SearchResult): Promise<void> {
    try {
      await this.fetch.post('/api/music/import', {
        body: JSON.stringify({ mbid: result.id }),
      });
      // Notify success via a service
    } catch (err) {
      this.error = err instanceof Error ? err.message : 'Import failed';
    }
  }
}
