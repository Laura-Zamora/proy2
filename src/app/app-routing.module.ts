import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './Components/albums/albums.component';
import { CommentsComponent } from './Components/comments/comments.component';
import { HomeComponent } from './Components/home/home.component';
import { InfoComponent } from './Components/info/info.component';
import { PhotosComponent } from './Components/photos/photos.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'info',component:InfoComponent
  },
  {
    path:'users',component:UsersComponent
  },
  {
    path:'comments',component:CommentsComponent
  },
  {
    path:'photos',component:PhotosComponent
  },
  {
    path:'albums',component:AlbumsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
