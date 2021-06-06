import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { Login } from '../../Shared/Login.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public hide = true;
  public loginForm: FormGroup = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
    console.log(this.loginForm.controls)
  }

  get form() {
    return this.loginForm.controls;
  }

  login() {
    const login: Login = {
      username: this.loginForm.controls.userName.value,
      password: this.loginForm.controls.password.value
    }
    this._authService.loginUser(login).subscribe(
      response => {
        console.log(response);
        if(response && response.status == 200) {
          localStorage.setItem('token', response.body.response);
          this._router.navigate(['/landing']);
        }
      }
    )
  }

}
