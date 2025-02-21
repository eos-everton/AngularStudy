import { Component, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [DialogModule, ButtonModule, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit {
  visible: boolean = false;
  items: any[] = [];
  errorMessage: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.apiService
      .getAll()
      .pipe(
        catchError((error) => {
          this.errorMessage =
            'Erro ao carregar os itens. Tente novamente mais tarde.';
          console.error(error);
          return of([]); // Retorna um array vazio caso ocorra erro
        })
      )
      .subscribe((data) => {
        this.items = data;
        console.log('Itens:', this.items);
      });
  }

  showDialog() {
    this.visible = true;
  }
}
