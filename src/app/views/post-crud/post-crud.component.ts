import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-crud',
  templateUrl: './post-crud.component.html',
  styleUrls: ['./post-crud.component.css']
})
export class PostCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  abrirCreatePost(): void {
    this.router.navigate(['/post/new']);
  }
  abrirCreatePostBootstrap(): void {
    this.router.navigate(['/post/bootstrap/new']);
  }
}
