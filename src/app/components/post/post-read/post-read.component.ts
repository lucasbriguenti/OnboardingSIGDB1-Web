import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-read',
  templateUrl: './post-read.component.html',
  styleUrls: ['./post-read.component.css']
})
export class PostReadComponent implements OnInit {
  posts: Post[];
  displayedColumns = ["userId", "id", "title", "body", "action"];
  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.service.read().subscribe(posts => this.posts = posts);
  }

}
