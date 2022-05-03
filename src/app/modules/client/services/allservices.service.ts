import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
//import { Producttemplatesection } from 'src/app/app/modules/client/Producttemplatesection.model';
import { environment } from 'src/environments/environment';
import { ChangePassword } from '../../auth/changepassword';
import { PostForgotPassword } from '../../auth/forgotpass.model';
import { Contact } from '../contact.model';
import { DynamicForm } from '../dynamicForm';
import { EntityGroup } from '../entitygroup.model';
import { listAddTabs } from '../listAddtabs.model';
import { ProductAttribute } from '../productAttribute.model';
import { ProductTemplateContent } from '../productentitytemplate.model';
import { ProductFamilyController } from '../productFamilyController';
import { ProductHierachyModel } from '../productHierachy.model';
import { ProductLineController } from '../productline.model';
import { Producttemplatesection } from '../Producttemplatesection.model';

@Injectable({
  providedIn: 'root'
})



export class AllservicesService {
  getForgotPassword(value: any) {
    throw new Error('Method not implemented.');
  }

  postNewUser(data:any){
    return this.http.post(this.createUser,data);
  }

  private allContactURL =environment.baseUrl+"/allContact";
  private userDetails =environment.baseUrl+"/contact/";
  private createUser =environment.accessToken+"/users/create";
  // dropdownlist
  private genderList= environment.baseUrl+"/commonMaster/gender?isCacheable=true";
  private countryList =environment.baseUrl+"/commonMaster/country?isCacheable=true";
  private stateList =environment.baseUrl+"/commonMaster/state?isCacheable=true";
  private cityList=environment.baseUrl+"/commonMaster/city?isCacheable=true";
  private titleList=environment.baseUrl+"/commonMaster/title?isCacheable=true";
  private addressList=environment.baseUrl+"/commonMaster/address%20type?isCacheable=true";
  private preferredList=environment.baseUrl+"/commonMaster/preferred%20language?isCacheable=true";
  private productLineControler =environment.baseUrl+"/createProductLine";
  private productFamilyController =environment.baseUrl+"/createProductFamily";
  private entityGroupController = environment.baseUrl+"/createEntityGroups"
  private ProductHierachyGroupController = environment.baseUrl+"/createProductHierarchy"

  private getsectionFromDetails=environment.baseUrl+"/getAllFormData/7";
  // new api link for entity group 
  private allProductLineFromProductFamily = environment.baseUrl+"/allProductLineFromProductFamily/";

  // new link to add entity group from prod line
  private allEntityGroupsFromProductLineid = environment.baseUrl+"/allEntityGroupsFromProductLine/";

  // new link to add all section from tab
    private allSectionFromTabid = environment.baseUrl+"/allSectionFromTab/";

// dropdown product hierachy
  private getProductHierachyH = environment.baseUrl+"/allProductHierarchy";
  private getProductFamilyH =environment.baseUrl+"/allProductFamily";
  private getProductLineH = environment.baseUrl+"/allProductLine";
  private  getEntityGroupH =environment.baseUrl+"/allEntityGroups";
  private getProductList1 = environment.baseUrl+"/productLine?";
  private getProductFamily1 = environment.baseUrl+"/productFamily?";
  private getProductHierachy1 = environment.baseUrl+"/productHierarchy?";
  // private getProductHierachy1 = environment.baseUrl+"/productHierarchy?";
  private getEntityGroup1 = environment.baseUrl+"/entityGroups?";
  private getEntityTemplate1 = environment.baseUrl+"/productEntityTemplates?";
  private getEntityTemplateSection1 = environment.baseUrl+"/productEntityTemplateSection?";
  private getEntityTemplateAttribute1 = environment.baseUrl+"/productEntityTemplateAttributes?";
  private getEntityTemplateAttributeid1 = environment.baseUrl+"/allProductEntityTemplateAttributes/";

  // get tab id   http://192.168.1.11:9090/allProductEntityTemplateTab/2


  
  private postTabsid = environment.baseUrl+"/allProductEntityTemplateTab/";
  private postSectionids = environment.baseUrl+"/allProductEntityTemplateSection/";

  // add 
  private postTabs = environment.baseUrl+"/persistFormData";
  private postDynamicFormData = environment.baseUrl+"/createTemplateData";

  // post 
  private postproductentityAttribute = environment.baseUrl+"/createProductEntityTemplateAttributes";
  private postproductTemplateSection = environment.baseUrl+"/createProductEntityTemplateSection";
  private postproductEntityTemplate = environment.baseUrl+"/createProductEntityTemplates";  
  
  // ids
  private getProductFamilyId = environment.baseUrl+"/productFamily/";
  private getProductLineId = environment.baseUrl+"/productLine/";
  private getProductEntityAttributId = environment.baseUrl+"/productEntityTemplateAttributes/";
  private getEntityGroupId = environment.baseUrl+"/entityGroups/";
  private getEntityTemplateId= environment.baseUrl+"/productEntityTemplates/";
  private getProductHierachyId= environment.baseUrl+"/productHierarchy/";
  private getProductEntityId = environment.baseUrl+"/productEntityTemplates/";
  private getSectionForm = environment.baseUrl+"/getAllFormData/";

  // calling ids to another page
  private allProductEntityTemplatesid = environment.baseUrl+"/allProductEntityTemplates/";

  // updat url
  private updateProductFamily = environment.baseUrl+"/updateProductFamily";
  private updateProductLine = environment.baseUrl+"/updateProductLine";
  private updateProductEntityAttribute = environment.baseUrl+"/updateProductEntityTemplateAttributes";
  private updateEntityGroup = environment.baseUrl+"/updateEntityGroups";
  private updateEntityTemplate = environment.baseUrl+"/updateProductEntityTemplates"
  private updateproducthierachydata = environment.baseUrl+"/updateProductHierarchy"
  private updateProductEntity = environment.baseUrl+"/updateProductEntityTemplates";
  private productEntityTemplateSectionID = environment.baseUrl+"/productEntityTemplateSection/";
  private updateProductEntityTemplateSectionHH = environment.baseUrl+"/updateProductEntityTemplateSection";

  // delete 
  private deleteproductFamily = environment.baseUrl+"/deleteProductFamily/";
  private deleteproductLine = environment.baseUrl+"/deleteProductLine/";
  private deleteEntityGroup = environment.baseUrl+"/deleteEntityGroups/"; 
  private deleteproducthierarhy = environment.baseUrl+"/deleteProductHierarchy/";
  private   deleteproductTemplate = environment.baseUrl+"/deleteProductEntityTemplates/";
  private deleteproductEntityAttribute = environment.baseUrl+"/deleteProductEntityTemplateAttributes/";
  private deleteproductTempSection = environment.baseUrl+"/deleteProductEntityTemplateSection/";
  private ProductLineFromProductFamilyDropDown= environment.baseUrl+"/allProductLineFromProductFamily/";
  private entityGroupsPostWithAttachment = environment.baseUrl+"/createEntityGroupsWithAttachement";
  private productLinePostWithAttachment = environment.baseUrl+"/createProductLineWithAttachment";
  private productFamilyWithAttachment=environment.baseUrl+"/createProductFamilyWithAttachment";
  private allSectionAndTabFromTemplateId=environment.baseUrl+"/allSectionAndTabFromTemplateId/";
  
    // auth
    private postForgotPassword ="http://192.168.1.11:8030/users/varifyrandomcode/";
    private changePasswordWithRandomString ="http://192.168.1.11:8030/users/changePasswordWithRandomString";
    private changepassword ="http://192.168.1.11:8030/users/changepassword";
  
  // add tabs
  constructor(private http: HttpClient) { }

  // To Get All Contacts
  getContacts(){
   return this.http.get(this.allContactURL);
  }

  // To get particular single contact
  getUserDetails(id:any){
    return this.http.get(this.userDetails+id);
  }

  getPostContact(data:Contact){
     return this.http.post(this.userDetails,data);
  }

  getProdEntityTemplate(id:number):Observable<any>{
    return this.http.get(this.getProductEntityId+id);
  }
  // dropdown list

  // add tab id

  // gettabId(id:string):Observable<any>{
  //   return this.http.get(this.postTabsid+id);
  // }

  // gettabId():Observable<any>{
  //   return this.http.get(this.postTabsid);
  // } 

  gettabId(id:number):Observable<any>{
    return this.http.get(this.postTabsid+id);
  }

  
  getsectionId(id:number):Observable<any>{
    return this.http.get(this.postSectionids +id);
  }
  


  // addTabs

  addingTabs(data :listAddTabs){

   // console.log(" +++++++ "+);
    return this.http.post(this.postTabs, data);
  }


  getTitleList():Observable<any>{
    return this.http.get(this.titleList);
 }
  getGenderList():Observable<any>{
     return this.http.get(this.genderList);
  }

   getCountryList():Observable<any>{
    return this.http.get(this.countryList);
  }

  getStateList():Observable<any>{
    return this.http.get(this.stateList);
  }

  getHierachyID():Observable<any>{
    return this.http.get(this.getProductHierachyH)
    }
  getCityList():Observable<any>{
    return this.http.get(this.cityList);
  }

  getAddressList():Observable<any>{
    return this.http.get(this.addressList);
  }

  getPreferredLanguageList():Observable<any>{
    return this.http.get(this.preferredList);
  }

  postLineControler(data:ProductLineController){
  return this.http.post(this.productLineControler, data)
  }
  
  postProductFamily(data : ProductFamilyController){
    return this.http.post(this.productFamilyController, data )
  }

  postProductHierachy(data: ProductHierachyModel){
    return this.http.post(this.ProductHierachyGroupController, data)
  }

 
// new api for entity group
 
  postEntityGroupnew(id:number):Observable<any>{
    return this.http.get(this.allProductLineFromProductFamily+id);
  }
  
  // new api for calling entity group from prod line

  getEntityGroupnew(id:number):Observable<any>{
    return this.http.get(this.allEntityGroupsFromProductLineid+id);
  }

  // new api to call  sec from tab
  getSectionFromTab(id:number):Observable<any>{
    return this.http.get(this.allSectionFromTabid+id);
  }

  // async getSectionFromTab(id:number):Promise<any>{
  //   return await this.http.get(this.allSectionFromTabid+id).toPromise();
  // }


// existing api for entity group
  postEntityGroup(data :EntityGroup){
    return this.http.post(this.entityGroupController, data);
  }

  postProductEntityAttribute(data : ProductAttribute){
    return this.http.post( this.postproductentityAttribute , data);
  }   

  postprodTemplateSection(data:any){
    return this.http.post(this.postproductTemplateSection,data);
  }

  postprodEntityTemplate(data:ProductTemplateContent){
    return this.http.post(this.postproductEntityTemplate,data)
  }
  

  // product hierachy dropdown

  getProductFamilyHierachy():Observable<any>{
    return this.http.get(this.getProductFamilyH);
  } 
 
  getProductLineHierachy():Observable<any>{
    return this.http.get(this.getProductLineH);
  }

  getEntityGroupHierachy():Observable<any>{
    return this.http.get(this.getEntityGroupH);
  }


  // calling ids to another page   
  
  allProductEntityTemp():Observable<any>{
    return this.http.get(this.allProductEntityTemplatesid);
  }


  productFamilyIDs():Observable<any>{
    return this.http.get(this.getProductFamilyH);
  }

  getProductList(url:string):Observable<any>{
    return this.http.get(this.getProductList1+url);
  }

  getFamilylist(url:string):Observable<any>{
    return this.http.get(this.getProductFamily1+url);
  }

  getProductHierachy(url:string):Observable<any>{
    return this.http.get(this.getProductHierachy1+url);
  }

  getEntityGroup(url:string):Observable<any>{
    return this.http.get(this.getEntityGroup1+url);
  }

  getEntityTemplate(url:string):Observable<any>{
    return this.http.get(this.getEntityTemplate1+url);
  }

  getEntityTemplateSection(url:string):Observable<any>{
    return this.http.get(this.getEntityTemplateSection1+url);

  }
  

  allSectionAndTabFromTemplateIdsearch(url:string):Observable<any>{
    return this.http.get(this.allSectionAndTabFromTemplateId+url);

  }


  getEntityTemplateAttributeidd1(id:any):Observable<any>{
    return this.http.get(this.getEntityTemplateAttributeid1+id);
    // return this.http.get("http://192.168.1.11:9090/allProductEntityTemplateAttributes/12?pageNo=1&pageSize=5");
  }

  getEntityTemplateAttribute(url:string):Observable<any>{
    return this.http.get(this.getEntityTemplateAttribute1+url);
  }

  getEntTempId(url:string):Observable<any>{
    return this.http.get(this.getEntityTemplateId+url);
  }

  // idsss
  getproductId(id:string):Observable<any>{
    return this.http.get(this.getProductFamilyId+id);
  
  }
  getLineId(id:string):Observable<any>{
    return this.http.get(this.getProductLineId+id);
  }

  getProdEntityAttriId(id:number):Observable<any>{
    return this.http.get(this.getProductEntityAttributId+id);
  }

  // prodhierachy
  getProductHierachyIdH(id:any):Observable<any>{
    return this.http.get(this.getProductHierachyId+id);
  }
  getentitygroupId(id:any):Observable<any>{
    return this.http.get(this.getEntityGroupId+id);
  }
  // update

  getProductTemplateSectionid(id:number):Observable<any>{
    return this.http.get(this.productEntityTemplateSectionID+id);
  }

    // update code for sections    updateProductEntityTemplateSectionHH
    putProductTemplateSection(data:Producttemplatesection){
      console.log(data, 'datassssssss');
       return this.http.put<any>(this.updateProductEntityTemplateSectionHH, data)
      }


   // updte 
   putProdEntity(data:any){
    return this.http.put<any>(this.updateProductEntity,data);
  }

    putProductFamily(data:FormData){
    console.log(data, 'datassssssss');
    return this.http.put<any>(this.updateProductFamily, data)
    }

    putProductLine(data:FormData){
      return this.http.put<any>(this.updateProductLine, data)
    }

    putProdEntityAttribute(data:ProductAttribute){
      console.log(data, 'updatsss');
      return this.http.put<any>(this.updateProductEntityAttribute,data);
    }

    putEntityGroup(data:any){
      return this.http.put<any>(this.updateEntityGroup,data);
    }

    putprodEntityTemplate(data:any){
      return this.http.put<any>(this.updateEntityTemplate, data);
    }

    putProdHierachyData(data:any){
      return this.http.put<any>(this.updateproducthierachydata, data);
    }
    // putProductAttribute(data:ProductAttribute){
    //   return 
    // }
  // delete method

  // deleteProductFamily(id:number, updatedBy:number){
  //   return this.http.delete(this.deleteproductFamily +id+updatedBy)
  // }

  deleteProductFamily(id:number, updatedBy:number){
    return this.http.delete(this.deleteproductFamily +id +"/" +updatedBy)
  }
  deleteLine(id:number, updatedBy:number){
    return this.http.delete(this.deleteproductLine +id +"/" +updatedBy)
  }

  deleteProdEntityAttribute(id:number, updatedBy:number){
    return this.http.delete(this.deleteproductEntityAttribute+id+"/"+updatedBy);
  }

  deleteProdTempSection(id:number, updatedBy: number){
    return this.http.delete(this.deleteproductTempSection+id+"/"+updatedBy);
  }
  
  deleteEntitygroups(id:number, updatedBy:number){
    return this.http.delete(this.deleteEntityGroup+id+"/"+updatedBy);
  }

  deleteProductHierarhys(id:number, updatedBy:number){
   return this.http.delete(this.deleteproducthierarhy+id+"/"+updatedBy);
  }

  deleteProductTemplate(id:number, updatedBy:number){
   return this.http.delete(this.deleteproductTemplate+id+"/"+updatedBy);
  }
  allProductLineFromProductFamilyDropDown(value:any){
    return this.http.get(this.ProductLineFromProductFamilyDropDown+value);
  }

  entityGroupsPost(formData: FormData) {
    return this.http.post(this.entityGroupsPostWithAttachment,formData);
  }

  productLinePost(formData: FormData) {
    return this.http.post(this.productLinePostWithAttachment,formData);
  }

  productFamilyPost(formData: FormData) {
    return this.http.post(this.productFamilyWithAttachment,formData);
  }
  
  getDataTable(arg0: string):Observable<any> {
    return this.http.get(this.allSectionAndTabFromTemplateId+arg0);
  }

  // DynamicSidebar

  getsectionFrom(id):Observable<any>{
    return this.http.get(this.getSectionForm+id);
  }

  getSideBar():Observable<any> {
    return this.http.get(environment.baseUrl + "/getHierarchialData");
   }

   getFromData(url:any):Observable<any> {
    return this.http.get(url);
  }

   public isStringUrl = new BehaviorSubject<String | undefined>("");
   emit<T>(value : string){
      this.isStringUrl.next(value);
    }
    on<T>():Observable<String | undefined>{
      return this.isStringUrl.asObservable();
    }

    postDynamicData(data:DynamicForm){
      return this.http.post(this.postDynamicFormData,data);
    }

 
    // autho
    
// new

getForgotPasswords(email:any ):Observable<any>{
  return this.http.get("http://192.168.1.11:8030/users/forgetPassword/" + email)
}

getVerifyRandomCode(randomcode:any){
  return this.http.get("http://192.168.1.11:8030/users/varifyrandomcode/" + randomcode,{observe:'response'})
}

PostChangePasswordWithRandomString(data : PostForgotPassword){
  return this.http.post(this.changePasswordWithRandomString, data);
}

PostChangePassword(data:ChangePassword){
  return this.http.post(this.changepassword, data);
}

getAllUsers(url:any):Observable<any> {
  return this.http.get("http://192.168.1.11:8030/users/allUsers?"+url);
}

}
