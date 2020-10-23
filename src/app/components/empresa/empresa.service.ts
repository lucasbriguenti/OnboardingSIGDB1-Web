import { Empresa } from './empresa.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

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
export class EmpresaService {
  baseUrl = "https://localhost:44382/api/Empresa";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }

  create(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.baseUrl, empresa, httpOptions);
  }

  read(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.baseUrl, httpOptions);
  }

  readById(id: string): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.baseUrl}/${id}`, httpOptions);
  }

  update(empresa: Empresa): Observable<Empresa> {
    return this.http.put<Empresa>(
      `${this.baseUrl}/${empresa.id}`,
      empresa,
      httpOptions
    );
  }

  delete(id: string) : Observable<Empresa>{
    return this.http.delete<Empresa>(`${this.baseUrl}/${id}`, httpOptions);
  }
}
