import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.posts = angularFire.database.list('posts');
  }

  getPosts(){
    return this.posts;
  }

  addPost(newPost: Post) {
    this.posts.push(newPost);
}

  getPostById(postId: string) {
    return this.angularFire.database.object('posts/' + postId);
  }

}
