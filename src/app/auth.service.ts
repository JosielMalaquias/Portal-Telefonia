import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';


interface mydata{
	success: boolean,
	message: string,
  nome: string,
  nivel: string,
  unidade: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  LoggedInStatus = false;
  MostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private Http: HttpClient) { }

  setLoggedIn(value: boolean ){
    this.LoggedInStatus = value;
    this.MostrarMenuEmitter.emit(value)
  }

  get isLoggedIn(){
    return  this.LoggedInStatus
  }

  getUserDetails(username, password){
  	return this.Http.post<mydata>('/library/auth.php', {
  		username,
  		password
  	})

  }
  
}

