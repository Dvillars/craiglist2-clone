import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
  providers: [PostService]
})
export class ForumComponent implements OnInit {
  // albums: FirebaseListObservable<any[]>;
  //ensures that every instance of ForumComponent has a Router object available when instantiated
  constructor(private router: Router, private postService: PostService){}
  posts: FirebaseListObservable<any[]>;

  ngOnInit(){
    this.posts = this.postService.getPosts();
  }

  goToDetailPage(clickedPost) {
    this.router.navigate(['post', clickedPost.$key]);
  };
}
