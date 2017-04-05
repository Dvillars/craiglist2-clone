import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { PostService } from '../post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PostService]

})
export class AdminComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  submitForm(title: string, author: string, content: string, category: string) {
    var newPost: Post = new Post(title, author, content, category);
    this.postService.addPost(newPost);
  }
}
