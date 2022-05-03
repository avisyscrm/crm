import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {

   }


   login(data){
    let headers = new HttpHeaders({
      'Content-Type': 'application/text'
  });
     return this.http.post(environment.accessToken+'/token/accessToken',{ responseType: 'json', headers },data);
   }
}
