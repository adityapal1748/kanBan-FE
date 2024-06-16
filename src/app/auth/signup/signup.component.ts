import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!:FormGroup
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email:new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",Validators.required),
      confirmPassword:new FormControl("",Validators.required)
    })
  }
  navigateLogin(){
    this.router.navigate(['/login'])
  }
  

}
