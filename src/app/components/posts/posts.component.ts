import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../models/post';
import { PostService } from '../../services/post-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
  }

}
