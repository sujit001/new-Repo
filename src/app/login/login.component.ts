import { Component,OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  
  ngOnInit(){
    this.loginForm = new FormGroup({
      email : new FormControl(null,[ Validators.minLength(5), Validators.required ]),
      password : new FormControl()

    })
  }
    submit(){
      if(this.loginForm.valid)
      // console.log(this.loginForm.get('email'));
      //  console.log(this.loginForm.get('password').value)
      //  console.log(this.loginForm.controls.email.value);
      console.log(this.loginForm.value);
 
    }
}
