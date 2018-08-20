import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'


interface myData {
	nome: string,
	email: string,
  nivel: string,
  unidade: string,
	matricula: string,
  success: boolean,
  message: string,
}

interface isLoggedIn{
  status: boolean  
}

interface logoutStatus{
  success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserData(){
  	return this.http.get<myData>('/library/database.php')
  }

  isLoggedIn(): Observable<isLoggedIn>{
    return this.http.get<isLoggedIn>('/library/isLoggedIn.php')
  }

  logout(){
    return this.http.get<logoutStatus>('/library/logout.php')
  }
}
