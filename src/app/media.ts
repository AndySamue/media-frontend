import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MediaItem } from './media.model';

@Injectable({
  providedIn: 'root',
})
export class Media {
  constructor(private http: HttpClient) {}

  getMedia(): Observable<MediaItem[]> {
    return this.http.get<MediaItem[]>('/api/media');
  }

  createMedia(media: MediaItem): Observable<MediaItem> {
    return this.http.post<MediaItem>('/api/media', media);
  }
}