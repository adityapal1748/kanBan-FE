import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signUpForm!:FormGroup
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email:new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",Validators.required)
    })
  }
  navigateSignUp(){
    this.router.navigate(['/signup'])
  }

}
