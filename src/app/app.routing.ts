import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent} from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ForumComponent } from './forum/forum.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AdminComponent }   from './admin/admin.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'forum',
    component: ForumComponent
  },
  {
    //:id makes this path a variable instead of just a string
    path: 'post/:id',
    component: PostDetailComponent
  },
  {
   path: 'admin',
   component: AdminComponent
 }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
