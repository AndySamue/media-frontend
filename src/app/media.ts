import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Media {
  constructor(private http: HttpClient) {}
  getMedia() {
    return this.http.get('/api/media');
  }
  createMedia(media: any) {
    return this.http.post('/api/media', media);
  }
}
