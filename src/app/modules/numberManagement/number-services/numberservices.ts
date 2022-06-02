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
  

  getnumberScheme(url:string):Observable<any>{
    return this.http.get(environment.baseUrl+"/numberTypeDefinition?"+url);
  }

  getnumberTypes():Observable<any>{
    return this.http.get(environment.baseUrl+"/allNumberTypeDefinition");
  }
}
