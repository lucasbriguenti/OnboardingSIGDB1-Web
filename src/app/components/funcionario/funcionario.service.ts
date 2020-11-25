import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { Funcionario } from "./funcionario.model";

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
  providedIn: "root",
})
export class FuncionarioService {
  baseUrl = "https://localhost:5001/api/Funcionario";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }

  create(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.baseUrl, funcionario, httpOptions);
  }

  read(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.baseUrl, httpOptions);
  }

  readById(id: string): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.baseUrl}/${id}`, httpOptions);
  }

  update(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(
      `${this.baseUrl}/${funcionario.id}`,
      funcionario,
      httpOptions
    );
  }

  delete(id: string): Observable<Funcionario> {
    return this.http.delete<Funcionario>(`${this.baseUrl}/${id}`, httpOptions);
  }

  vincularEmpresa(funcionario: Funcionario): void{
  }

  exibirMsgErro(error: any): void {
    var msg = '';
    error.error.forEach(element => {
      msg = msg + element.Message + '\n';
    });
    this.showMessage(msg);
  }
}
