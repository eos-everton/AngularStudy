import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-newsmiddle',
  standalone: true,
  imports: [RouterModule, CommonModule, ModalComponent],
  templateUrl: './newsmiddle.component.html',
  styleUrls: ['./newsmiddle.component.scss'] // Correção aqui
})
export class NewsmiddleComponent implements OnInit {
  items: any[] = [];
  errorMessage: string = ''; // Adicionando uma variável para erro
  visible = false;
  selectedItem: any = null;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.apiService.getAll().pipe(
      catchError(error => {
        this.errorMessage = 'Erro ao carregar os itens. Tente novamente mais tarde.';
        console.error(error);
        return of([]); // Retorna um array vazio caso ocorra erro
      })
    ).subscribe(data => {
      this.items = data;
      console.log('Itens:', this.items);
    });
  }
  openModal(item: any) {
    this.selectedItem = item; // Armazena o item clicado
    this.visible = true; // Exibe o modal
  }

  closeDialog() {
    this.visible = false;
    this.selectedItem = null;
  }

  openDetails(item: any) {
    this.router.navigate(['members'], { queryParams: item });
  }
}
