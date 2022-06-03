import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor(private http: HttpClient) { }

  getNumberSchemes(url:string): Observable<any>  {
    return this.http.get("./assets/numberScheme.json");
  }
  

  getnumberSchemeDetails(url:string):Observable<any>{
    return this.http.get("./assets/numberSchemeDetails.json");
  }

  getnumberTypes():Observable<any>{
    return this.http.get(environment.baseUrl+"/allNumberTypeDefinition");
  }

  createNumberScheme(data){
    //return this.http.post(environment.baseUrl+"/createNumberTypeDefinition",data);
    return this.http.get("./assets/numberSchemeDetails.json");
  } 
  updateNumberScheme(value: any){
    //return this.http.put(environment.baseUrl+"/updateNumberTypeDefinition",value);
    return this.http.get("./assets/numberSchemeDetails.json");
  }
}
