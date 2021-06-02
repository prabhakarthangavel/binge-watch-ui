import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PostComponent } from './post/post.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { LoginComponent } from './authenticate/login/login.component';
import { RegisterComponent } from './authenticate/register/register.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'posts', component: PostComponent },
  { path: 'movie-info', component: MovieInfoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
