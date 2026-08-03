import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Media } from '../media';

@Component({
  selector: 'app-media-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './media-form.html',
  styleUrl: './media-form.css'
})
export class MediaForm {
  private fb = inject(FormBuilder);
  private mediaService = inject(Media);
  private router = inject(Router);

  form = this.fb.group({
    title: ['', Validators.required],
    type: ['PELICULA', Validators.required],
    year: [null as number | null, [Validators.required, Validators.min(1888), Validators.max(2100)]],
    rating: [null as number | null, [Validators.required, Validators.min(0), Validators.max(10)]],
    seen: [false],
  });

  enviando = false;
  error = '';

  guardar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.enviando = true;
    this.mediaService.createMedia(this.form.value as any).subscribe({
      next: () => { this.router.navigate(['/media']); },
      error: (err) => { this.error = 'No se pudo guardar el registro.'; this.enviando = false; console.error(err); }
    });
  }
}