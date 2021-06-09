import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PostComponent } from './post/post.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { LoginComponent } from './authenticate/login/login.component';
import { RegisterComponent } from './authenticate/register/register.component';
import { AuthguardService } from './authenticate/authguard.service';

const routes: Routes = [
  { path: 'landing', component: LandingComponent, canActivate: [AuthguardService] },
  { path: 'posts', component: PostComponent, canActivate: [AuthguardService] },
  { path: 'movie-info', component: MovieInfoComponent, canActivate: [AuthguardService] },
  { path: 'login', component: LoginComponent, canActivate: [AuthguardService] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthguardService] },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
