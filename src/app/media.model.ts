export type TipoMedia = 'PELICULA' | 'SERIE';

export interface MediaItem {
  id?: number;
  title: string;
  type: TipoMedia;
  year: number;
  rating: number;
  seen: boolean;
}