import { Routes } from '@angular/router';
import { MediaList } from './media-list/media-list';
import { MediaForm } from './media-form/media-form';

export const routes: Routes = [
  { path: 'media', component: MediaList },
  { path: 'media/nuevo', component: MediaForm },
  { path: '', redirectTo: 'media', pathMatch: 'full' },
];