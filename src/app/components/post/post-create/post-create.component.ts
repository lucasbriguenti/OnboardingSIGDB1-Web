import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  post: Post = {
    body: null,
    id: null,
    title: null,
    userId: null
  }
  constructor(private service: PostService, private router: Router) { }

  ngOnInit(): void {
  }
  cancel(): void {
    this.router.navigate(["/post"]);
  }

  createPost(): void{
    this.service.create(this.post).subscribe(() => {
      this.service.showMessage('Post registrado!');
      this.cancel();
    })
  }
}
