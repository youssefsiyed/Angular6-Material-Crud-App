import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSpinKitModule } from 'ng-spin-kit'; //loading
import { Ng2SearchPipeModule } from 'ng2-search-filter'; // search pipe
import { NgxPaginationModule } from 'ngx-pagination'; // pagination
import { NgPipesModule } from 'ngx-pipes'; // lot of pipes
import { NgProgressModule } from '@ngx-progressbar/core'; /// progress bar
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // angular animation
import { ToastrModule } from 'ngx-toastr'; // toast
import { BarRatingModule } from "ngx-bar-rating"; // bar rating
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentsDetailsComponent } from './components/comments-details/comments-details.component';
import { CommentsAddComponent } from './components/comments-add/comments-add.component';
import { CommentsUpdateComponent } from './components/comments-update/comments-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    NavBarComponent,
    CommentsComponent,
    CommentsDetailsComponent,
    CommentsAddComponent,
    CommentsUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    NgSpinKitModule,
    NgPipesModule,
    BarRatingModule,
    ToastrModule.forRoot(),
    NgProgressModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
