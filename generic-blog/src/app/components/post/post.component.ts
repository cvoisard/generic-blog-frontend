import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PostService } from '../../services/post-service.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
    this.posts$.subscribe(res => console.log(res));
  }

}
