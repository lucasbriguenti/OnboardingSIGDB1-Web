import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Funcionario } from './funcionario.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers':
      'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  baseUrl = "https://localhost:44382/api/Funcionario"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  showMessage(msg: string) : void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  create(funcionario: Funcionario) : Observable<Funcionario>{
    return this.http.post<Funcionario>(this.baseUrl, funcionario, httpOptions)
  }

  read(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.baseUrl, httpOptions)
  }
}
