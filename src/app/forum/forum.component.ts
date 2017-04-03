import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
  providers: [PostService]
})
export class ForumComponent implements OnInit {
  //ensures that every instance of ForumComponent has a Router object available when instantiated
  constructor(private router: Router, private postService: PostService){}
  posts: Post[];

  ngOnInit(){
    this.posts = this.postService.getPosts();
  }

  goToDetailPage(clickedPost: Post) {
    this.router.navigate(['post', clickedPost.id]);
  };
}
