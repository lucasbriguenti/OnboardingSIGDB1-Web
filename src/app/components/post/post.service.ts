import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import { User } from './user.model';
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
export class PostService {
  baseUrl = "https://jsonplaceholder.typicode.com";
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }
  read(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`, httpOptions);
  }
  create(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.baseUrl}/posts`, post, httpOptions);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`, httpOptions);
  }
}
