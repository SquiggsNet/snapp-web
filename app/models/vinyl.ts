import Model, { attr, hasMany } from '@ember-data/model';
import type Artist from './artist';
import type Song from './song';

export default class Vinyl extends Model {
  @attr('string') label?: string;
  @hasMany('artist', { async: true, inverse: 'vinyls' }) artists!: Artist[];
  @hasMany('song', { async: true, inverse: 'vinyl' }) songs!: Song[];
}

declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    vinyl: Vinyl;
  }
}
