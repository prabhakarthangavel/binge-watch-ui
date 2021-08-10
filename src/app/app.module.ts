import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LandingComponent } from './landing/landing.component';
import { PostComponent } from './post/post.component';
import { RatingModule } from 'ng-starrating';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { LoginComponent } from './authenticate/login/login.component';
import { Interceptor } from './Shared/Interceptor';
import { MyReviewsComponent } from './reviews/my-reviews/my-reviews.component';
import { ReviewsCardComponent } from './reviews/reviews-card/reviews-card.component';
import { FollowersComponent } from './followers/followers.component';
import { SearchComponent } from './followers/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingComponent,
    PostComponent,
    MovieInfoComponent,
    LoginComponent,
    MyReviewsComponent,
    ReviewsCardComponent,
    FollowersComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RatingModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
