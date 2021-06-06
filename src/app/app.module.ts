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
import { RegisterComponent } from './authenticate/register/register.component';
import { Interceptor } from './Shared/Interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingComponent,
    PostComponent,
    MovieInfoComponent,
    LoginComponent,
    RegisterComponent
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
