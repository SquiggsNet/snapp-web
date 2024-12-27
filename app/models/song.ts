import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
import type Artist from './artist';
import type Vinyl from './vinyl';

export default class Song extends Model {
  @attr('string') label?: string;
  @attr('number') length?: number;
  @attr('string') number?: string;
  @hasMany('artist', { async: true, inverse: 'songs' }) artists!: Artist[];
  @belongsTo('vinyl', { async: true, inverse: 'songs' }) vinyl!: Vinyl[];
}

declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    song: Song;
  }
}
