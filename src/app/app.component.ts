import { Component } from '@angular/core';
import { AuthService } from './authenticate/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'binge-watch';

  constructor(public _authService: AuthService) {}
}
