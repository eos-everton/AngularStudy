import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-newsmiddle',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './newsmiddle.component.html',
  styleUrls: ['./newsmiddle.component.scss'] // Correção aqui
})
export class NewsmiddleComponent implements OnInit {
  items: any[] = [];
  errorMessage: string = ''; // Adicionando uma variável para erro

  constructor(private apiService: ApiService) {}

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
}
