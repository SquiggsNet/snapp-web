import Model, { attr, belongsTo } from '@ember-data/model';
import type Artist from './artist';
import type Vinyl from './vinyl';

export default class Song extends Model {
  @attr('string') label?: string;
  @attr('number') length?: number;
  @attr('number') side?: number;
  @attr('number') disc?: number;
  @belongsTo('artist', { async: true, inverse: 'songs' }) artist!: Artist[];
  @belongsTo('vinyl', { async: true, inverse: 'songs' }) vinyl!: Vinyl[];
}

declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    song: Song;
  }
}
