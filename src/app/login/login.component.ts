import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private Auth: AuthService, 
    private router: Router, 
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) { }

  ngOnInit() {

  }

  LoginUser(event){
  	event.preventDefault()
  	const target = event.target
  	const username = target.querySelector('#username').value
  	const password = target.querySelector('#password').value

  	this.Auth.getUserDetails(username, password).subscribe(data => {
  		if(data.success != false){
  			this.router.navigate(['home'])
  			this.Auth.setLoggedIn(true)
  		}else{
        this.toastr.warning(data.message, 'Informação');
  		}
  	})
  }

}
