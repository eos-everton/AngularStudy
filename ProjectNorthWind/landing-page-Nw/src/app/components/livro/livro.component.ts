import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.scss',
})
export class LivroComponent {
  pages = ['Capa', 'Página 1', 'Página 2', 'Página 3', 'Contra Capa'];
  currentPage = 0;

  nextPage() {
    if (this.currentPage < this.pages.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
}
