import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Media } from '../media';
import { MediaItem } from '../media.model';

@Component({
  selector: 'app-media-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './media-list.html',
  styleUrl: './media-list.css'
})
export class MediaList implements OnInit {
  items: MediaItem[] = [];
  loading = true;
  error = '';

  constructor(private mediaService: Media) {}

  ngOnInit(): void {
    this.cargarMedia();
  }

  cargarMedia(): void {
    this.loading = true;
    this.mediaService.getMedia().subscribe({
      next: (data) => { this.items = data; this.loading = false; },
      error: (err) => { this.error = 'No se pudo conectar con el backend.'; this.loading = false; console.error(err); }
    });
  }
}