import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';

import { PostService } from './services/post-service.service';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    MainComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
