import { Cargo } from "./cargo.model";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

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
export class CargoService {
  baseUrl = "https://localhost:44382/api/Cargo";
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }

  create(cargo: Cargo): Observable<Cargo> {
    return this.http.post<Cargo>(this.baseUrl, cargo, httpOptions);
  }

  read(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(this.baseUrl, httpOptions);
  }

  readById(id: string): Observable<Cargo> {
    return this.http.get<Cargo>(`${this.baseUrl}/${id}`, httpOptions);
  }

  update(cargo: Cargo): Observable<Cargo> {
    return this.http.put<Cargo>(
      `${this.baseUrl}/${cargo.id}`,
      cargo,
      httpOptions
    );
  }

  delete(id: string): Observable<Cargo> {
    return this.http.delete<Cargo>(`${this.baseUrl}/${id}`, httpOptions);
  }
}
