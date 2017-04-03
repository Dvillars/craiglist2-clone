import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  //ensures that every instance of ForumComponent has a Router object available when instantiated
  constructor(private router: Router){}

  posts: Post[] = [
    new Post("couch for sale", "rachel", "my couch is in good condition", "for sale", 1),
    new Post("car for sale", "michael", "my car is in bad condition", "for sale", 2),
    new Post("free books", "juan", "nancy drew book series", "for sale", 3)
  ];

  goToDetailPage(clickedPost: Post) {
    this.router.navigate(['post', clickedPost.id]);
  };
}
