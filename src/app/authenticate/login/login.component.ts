import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { Login } from '../../Shared/Login.interface';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public hide = true;
  public loginEnable: boolean = true;
  public invalidPswd: boolean;
  public loginForm: FormGroup = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });
  public registerForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    userName: ['', [Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')]],
    password: ['', Validators.required],
    repassword: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private _authService: AuthService, private _router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    console.log(this.loginForm.controls)
  }

  get form() {
    return this.loginForm.controls;
  }

  get regform() {
    return this.registerForm.controls;
  }

  login(): void {
    const login: Login = {
      username: this.loginForm.controls.userName.value,
      password: this.loginForm.controls.password.value
    }
    this._authService.loginUser(login).subscribe(
      response => {
        if (response && response.status == 200) {
          if (response.body.response != null) {
            localStorage.setItem('token', response.body.response);
            this._router.navigate(['/landing']);
          }else {
            this._snackBar.open("Invalid Credentials!", "Close", {
              duration: 5000,
              verticalPosition: 'top'
          });
          }
        }
      }
    )
  }

  passwordCheck(){
    this.invalidPswd = false;
  }

  register(): void {
    if(this.registerForm.controls.password.value != this.registerForm.controls.repassword.value) {
      this.invalidPswd = true;
    }else {
      this.invalidPswd = false;
    }
    console.log('regform',this.registerForm.controls)
  }

}
