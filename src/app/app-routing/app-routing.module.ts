import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';
import { CommentsComponent } from '../components/comments/comments.component';
import { CommentsDetailsComponent } from '../components/comments-details/comments-details.component';
import { CommentsAddComponent } from '../components/comments-add/comments-add.component';
import { CommentsUpdateComponent } from '../components/comments-update/comments-update.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'comments-detail/:id', component: CommentsDetailsComponent },
  { path: 'comments-add', component: CommentsAddComponent },
  { path: 'comments-update/:id', component: CommentsUpdateComponent },
  { path: '**', component: NotfoundComponent }
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
