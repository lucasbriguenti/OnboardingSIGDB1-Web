import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Carro } from './carro.model';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Access-Control-Allow-Headers":
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
  }),
};
@Injectable({
  providedIn: 'root'
})
export class CarroService {
  baseUrl = "https://localhost:5001/api/Carro";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }

  create(carro: Carro): Observable<Carro> {
    return this.http.post<Carro>(this.baseUrl, carro, httpOptions);
  }

  read(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.baseUrl, httpOptions);
  }

  readById(id: string): Observable<Carro> {
    return this.http.get<Carro>(`${this.baseUrl}/${id}`, httpOptions);
  }

  update(carro: Carro): Observable<Carro> {
    return this.http.put<Carro>(
      `${this.baseUrl}/${carro.id}`,
      carro,
      httpOptions
    );
  }

  delete(id: string): Observable<Carro> {
    return this.http.delete<Carro>(`${this.baseUrl}/${id}`, httpOptions);
  }
}
