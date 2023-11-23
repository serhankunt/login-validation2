import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(){
    console.log(this.user?.valid);
    console.log(this.password?.valid);
    // console.log(this.user);
    // console.log(this.password);
    // console.warn(this.loginForm.value);
  }

  title = 'Angular Reactive Form';
  loginForm = new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(3)]),
  })

  loginUser(){
    console.warn(this.loginForm.value);
  }

  get user(){
    return this.loginForm.get('user');
  }
  get password(){
    return this.loginForm.get('password');
  }
  deneme(){
    console.log(this.user?.valid);
    console.log(this.password?.valid);
    // console.log(this.user);
    // console.log(this.password);
    //console.warn(this.loginForm.value);
  }

}
//,Validators.pattern('[a-zA-Z ]*')