import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NumberservicesService {

  constructor(private http: HttpClient) { }

  private numberFormatURL = environment.baseUrl+"/createNumberFormatDefinition";
  private allNumberFormat = environment.baseUrl+"/numberFormatDefinitionByTypeId/";
  private getLevelNameURL = environment.baseUrl+"/numberFormatDefinition/";
  private putLevelNameURL = environment.baseUrl+"/updateNumberFormatDefinition/";
  private deleteLevelNameURL = environment.baseUrl+"/deleteNumberFormatDefinition/";
  private numberSchemeListUrl = environment.baseUrl+"/masters/allNumberSchemeConfiguration";
 
  getnumberType(url:string):Observable<any>{
    return this.http.get(environment.baseUrl+"/numberTypeDefinition?"+url);
  }

  getnumberTypeID(id: any) {
    return this.http.get(environment.baseUrl+"/numberTypeDefinition/"+id);
  }

  deletenumberType(id){
    return this.http.delete(environment.baseUrl+"/deleteNumberTypeDefinition/"+id+"/"+ JSON.parse(sessionStorage.getItem('userDetails')).userId);
  }

  createNumberType(data){
    return this.http.post(environment.baseUrl+"/createNumberTypeDefinition",data);
  }

  updatenumberType(value: any) {
    return this.http.put(environment.baseUrl+"/updateNumberTypeDefinition",value);
  }

  postNumberFormat(data){
    return this.http.post(this.numberFormatURL,data);
  }

  getAllNumberFormat(id:number,url:string){
    return this.http.get(this.allNumberFormat+id+"?"+url);
  }

  getLevelNameData(levelName:string){
    return this.http.get(this.getLevelNameURL+levelName)
  }

  updateLevelNameData(levelData:string){
    return this.http.put(this.putLevelNameURL,levelData);
  }
  
   delLevelNameData(levelName:String, id:any){
     return this.http.delete(this.deleteLevelNameURL+levelName+"/"+id)
   }

   getNumberSchemes(url:string): Observable<any>  {
    return this.http.get(environment.schemeBaseUrl+"/numberSchemeConfiguration");;
    //return this.http.get("./assets/numberScheme.json");
  }
  

  getnumberSchemeDetails(id:number):Observable<any>{
    return this.http.get(environment.schemeBaseUrl+"/numberSchemeConfiguration/"+id);
    // return this.http.get("./assets/numberSchemeDetails.json"+id);
  }

  postNumberSceme(data){
    return this.http.post(environment.schemeBaseUrl+"/createNumberSchemeConfiguration",data);
  }

  getnumberTypes():Observable<any>{
    return this.http.get(environment.baseUrl+"/allNumberTypeDefinition");
  }

  deletenumberScheme(numberSchemeId:number, id:any){
    return this.http.delete(environment.schemeBaseUrl+"/deleteNumberSchemeConfiguration"+"/"+numberSchemeId+"/"+id)
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
