import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost/teste/API/'; // URL da sua API

  constructor(private http: HttpClient) {}

  // Método para buscar todos os itens
  getAll(): Observable<any[]> { // Tipagem do retorno como array de objetos
    return this.http.get<any[]>(`${this.apiUrl}`).pipe( // Tipagem da resposta
      catchError(error => {
        console.error('Erro ao buscar itens', error); // Log de erro
        return of([]); // Retorna um array vazio em caso de erro
      })
    );
  }
}
