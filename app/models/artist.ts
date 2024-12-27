import Model, { attr, hasMany } from '@ember-data/model';
import type Vinyl from './vinyl';
import type Song from './song';

export default class Artist extends Model {
  @attr('string') label?: string;
  @attr('string') type!: 'Person' | 'Group';
  @hasMany('vinyl', { async: true, inverse: 'artists' }) vinyls!: Vinyl[];
  @hasMany('song', { async: true, inverse: 'artists' }) songs!: Song[];
}

declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    artist: Artist;
  }
}
