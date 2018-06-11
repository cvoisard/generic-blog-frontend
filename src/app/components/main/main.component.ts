import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post-service.service';
import { Post } from '../../models/post';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
  }

}
