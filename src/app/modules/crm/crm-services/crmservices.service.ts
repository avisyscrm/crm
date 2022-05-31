
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { BehaviorSubject, Observable } from 'rxjs';
//import { Producttemplatesection } from 'src/app/app/modules/client/Producttemplatesection.model';
import { environment } from 'src/environments/environment';
import { assingroles } from '../../admin/assignrole';
import { ChangePassword } from '../../auth/changepassword';
import { PostForgotPassword } from '../../auth/forgotpass.model';
import { Contact } from '../crm/crmForm-model/contact.model';
import { DynamicForm } from '../crm/crmForm-model/dynamicForm';
import { EntityGroup } from '../crm/crmForm-model/entitygroup.model';
import { listAddTabs } from '../crm/crmForm-model/listAddtabs.model';
import { ProductAttribute } from '../crm/crmForm-model/productAttribute.model';
import { ProductTemplateContent } from '../crm/crmForm-model/productentitytemplate.model';
import { ProductFamilyController } from '../crm/crmForm-model/productFamilyController';
import { ProductHierachyModel } from '../crm/crmForm-model/productHierachy.model';
import { ProductLineController } from '../crm/crmForm-model/productline.model';
import { Producttemplatesection } from '../crm/crmForm-model/Producttemplatesection.model';
@Injectable({
    providedIn: 'root'
  })

  
  export class CrmservicesService {
  updateOption(data) {
    return this.http.put(environment.baseUrl+"/updateOption",data);
  }
  saveOption(data) {
    return this.http.post(environment.baseUrl+"/createOption",data);
  }
  deleteOptionById(id: any,userID) {
    return this.http.delete(environment.baseUrl+"/deleteOption/"+id+"/"+userID)
  }
  getOptionById(id: any) {
    return this.http.get(environment.baseUrl+"/getOptionById/"+id)
  }
  getOptioDataTable(id,url: any) {
   return this.http.get(environment.baseUrl+"/optionByAttributeId/"+id+"?"+url)
  }
  getProductEntitytemplatesectionById(data: any) {
    return this.http.get(environment.baseUrl+"/productEntityTemplateAttributes/"+data);
  }
  getproductAttributeList() {
    return this.http.get(environment.baseUrl+"/getProductAttribute");
  }
  getEntitytemplatesectionById(data: any) {
    return this.http.get(environment.baseUrl+"/productEntityTemplateSection/"+data);
  }
    productTemplate(id) {
      return this.http.get(environment.baseUrl+"/productEntityTemplates/"+id);
    }
  updateProductTemplate(value: any) {
    return this.http.put(environment.baseUrl+"/updateProductEntityTemplates",value);
  }
  SaveProductTemplate(value: any) {
    return this.http.post(environment.baseUrl+"/createProductEntityTemplates",value);
  }
  productEntityTypeList() {
    return this.http.get(environment.baseUrl+"/allProductEntityTypes");
  }
  getHrichyList() {
    return this.http.get(environment.baseUrl+"/allProductHierarchy");
  }
  deleteEntityType(productEntityTypeId: any) {
    return this.http.delete(environment.baseUrl+"/deleteProductEntityTypes/"+productEntityTypeId+"/"+ JSON.parse(sessionStorage.getItem('userDetails')).userId);
  }
  createProductEntity(data){
    return this.http.post(environment.baseUrl+"/createProductEntityTypes",data);
  }
  putProductEntity(data){
    return this.http.put(environment.baseUrl+"/updateProductEntityTypes",data);
  }
  getProductEntityID(id: any) {
    return this.http.get(environment.baseUrl+"/productEntityTypes/"+id);
  }
  getProductEntity(arg0: string) {
    return this.http.get(environment.baseUrl+"/productEntityTypes?"+arg0);
  }
  chcekLine(value: any) {
    return this.http.get(environment.baseUrl+"/checkIfProductLineExists/"+value);
  }
  chcekFamilly(id) {
    return this.http.get(environment.baseUrl+"/checkIfProductFamilyExists/"+id);
  }
  checkEntity(value:any){
    return this.http.get(environment.baseUrl+"/checkIfEntityGroupExists/"+value);
    
  }


    deleteHierarchy(id){
      return this.http.delete(environment.baseUrl+"/deleteProductHierarchy/"+id+"/"+ JSON.parse(sessionStorage.getItem('userDetails')).userId);

    }
  putProductHierachy(value: any) {
    return this.http.put(environment.baseUrl+"/updateProductHierarchy",value);
  }
  getproductHierarchybyId(id: any) {
   return this.http.get(environment.baseUrl+"/productHierarchy/"+id);
  }
  SaveProducrHIrechy(value: any) {
    return this.http.post(environment.baseUrl+"/createProductHierarchy",value);
  }
  getallProductLine() {
    return this.http.get(environment.baseUrl+"/allProductLine");
  }
  getallProductFamily() {
    return this.http.get(environment.baseUrl+"/allProductFamily");
  }
  allEntityGroups() {
    return this.http.get(environment.baseUrl+"/allEntityGroups");
  }

updateProductFamilyWithoutFile(data){
  return this.http.put(environment.baseUrl+"/updateProductFamily",data);

}

createProductFamilly(data){
  return this.http.post(environment.baseUrl+"/createProductFamilyWithAttachment",data);
}
    getFamilly(id: any) {
      return this.http.get(environment.baseUrl+"/productFamily/"+id);
    }

  getEntityGroupData(id: any) {
    return this.http.get(environment.baseUrl+"/entityGroups/"+id);
  }

  addEntityGroupsData(data) {
    return this.http.post(environment.baseUrl+"/createEntityGroupsWithAttachement",data);
  }
  updatEentityGroupsData(data) {
    return this.http.put(environment.baseUrl+"/updateEntityGroupsWithAttachement",data);
  }


  updatEentityGroupsDataWithoutFile(data) {
    return this.http.put(environment.baseUrl+"/updateEntityGroups",data);
  }

  

  addProductLineData(data) {
    return this.http.post(environment.baseUrl+"/createProductLineWithAttachment",data);
  }
  updateProductLineData(data) {
    return this.http.put(environment.baseUrl+"/updateProductLineWithAttachement",data);
  }

  updateProductLineDatawithoutFile(data) {
    return this.http.put(environment.baseUrl+"/updateProductLine",data);
  }
  getLineById(id: any) {
  return this.http.get(environment.baseUrl+"/productLine/"+id);
  }
 
    getProductAttributeById(data){
      return this.http.get(environment.baseUrl+"/getProductAttributeById/"+data);
    }
    deleteProductAttribute(data,data1){
      return this.http.delete(environment.baseUrl+"/deleteProductAttribute/"+data+"/1234");
    }

  putProductAtributeMaster(data) {
    return this.http.post(environment.baseUrl+"/createProductAttribute",data);
  }

  updateProductAtributeMaster(data) {
    return this.http.put(environment.baseUrl+"/updateProductAttribute",data);
  }
  chceck(arg0: string) {
    return this.http.get(environment.baseUrl+"/checkIfExsits/"+arg0);
  }
  getMasterProductAtribute(url) {
    return this.http.get(environment.baseUrl+"/getAllProductAttribute?"+url);
  }
   
    edituser(id: any) {
      return this.http.get(this.editUsers+id);
    }
 

  gettabEditData(templateId,tabId,version) {
    return this.http.get(this.getTabWiseEditData+"templateId="+templateId+"&tabId="+tabId+"&version="+version);
  }

  // 
   // data table of roles
   private getRolesDatatable = environment.accessToken+"/roles/getRolesPaging?";
   // users/getAllUsers
   private getAllUsers = environment.accessToken+"/users/getAllUsers";
   private editUsers = environment.accessToken+"/users/userById/";
   // get all roles
   
   private getAllRolesList = environment.accessToken+"/roles/getroles";
   private setNewpassword = environment.accessToken+"/users/verify"; 
   // post assingrole
   private postassingrole = environment.accessToken+"/users/assignRole";
    // post assingrole
    private postcreaterole = environment.accessToken+"/roles/createroles";
    private postSchedule = environment.baseUrl+"/scheduleEmail";
    private createUser1 = environment.accessToken+"/users/update";
    private getEmailTempateVariables = environment.baseUrl+"/templateVariables/";
    private allEmails = environment.baseUrl+"/email/emailDetails?";
    private resentEmail = environment.baseUrl+"/email/rescheduleEmail/";
    
  // 

    private allContactURL = environment.baseUrl+"/allContact";
    private userDetails = environment.baseUrl+"/contact/";
    private createUser = environment.accessToken+"/users/create";
    private getRoles = environment.accessToken+"/roles/getroles";
    private getAllUsersUrl= environment.accessToken+"/users/allUsers?";
    private deleteUserUrl =environment.accessToken+"/users/delete/";
    private userProfileUrl = environment.baseUrl+"/fetchUserById/";
    private updateProfileUrl = environment.baseUrl+"/updateUser";
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
    private dynamicTemplateData = environment.baseUrl+"/allTemplateData/";
    private getsectionFromDetails=environment.baseUrl+"/getAllFormData/";
    private getdynamicTemplateData = environment.baseUrl+"/patchTemplateData?";
    private  getTabWiseEditData=environment.baseUrl+ "/patchTemplateData?";
    private getEmailTemplate = environment.baseUrl+"/emailTemplate";
    // new api link for entity group 
    private allProductLineFromProductFamily = environment.baseUrl+"/allProductLineFromProductFamily/";
  
    // new link to add entity group from prod line
    private allEntityGroupsFromProductLineid = environment.baseUrl+"/allEntityGroupsFromProductLine/";
  
    // new link to add all section from tab
      private allSectionFromTabid = environment.baseUrl+"/allSectionFromTab/";
      private allEmailTemplate = environment.baseUrl+"/emailTemplatePaging?";
      
  // dropdown product hierachy
    private getProductHierachyH = environment.baseUrl+"/allProductHierarchy";
    private getProductFamilyH =environment.baseUrl+"/allProductFamily";
    private getProductLineH = environment.baseUrl+"/allProductLine";
    private getEntityGroupH =environment.baseUrl+"/allEntityGroups";
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
    private numberFormatURL = environment.baseUrl+"/createNumberFormatDefinition";
    private allNumberFormat = environment.baseUrl+"/numberFormatDefinitionByTypeId/";
    private getLevelNameURL = environment.baseUrl+"/numberFormatDefinition/";
    private putLevelNameURL = environment.baseUrl+"/updateNumberFormatDefinition/";
    private deleteLevelNameURL = environment.baseUrl+"/deleteNumberFormatDefinition/"
    // add 
    private postTabs = environment.baseUrl+"/persistFormData";
    private postDynamicFormData = environment.baseUrl+"/createTemplateData";
  
    // post 
    private postproductentityAttribute = environment.baseUrl+"/createProductEntityTemplateAttributes";
    private postproductTemplateSection = environment.baseUrl+"/createProductEntityTemplateSection";
    private postproductEntityTemplate = environment.baseUrl+"/createProductEntityTemplates";  
    private postEmailTemlateUrl = environment.baseUrl+"/createEmailTemplate";
    // ids
    private getProductFamilyId = environment.baseUrl+"/productFamily/";
    private getProductLineId = environment.baseUrl+"/productLine/";
    private getProductEntityAttributId = environment.baseUrl+"/productEntityTemplateAttributes/";
    private getEntityGroupId = environment.baseUrl+"/entityGroups/";
    private getEntityTemplateId= environment.baseUrl+"/productEntityTemplates/";
    private getProductHierachyId= environment.baseUrl+"/productHierarchy/";
    private getProductEntityId = environment.baseUrl+"/productEntityTemplates/";
    private getSectionForm = environment.baseUrl+"/getAllFormData/";
    private getEmailTempId = environment.baseUrl+"/emailTemplate/";
    // calling ids to another page
    private allProductEntityTemplatesid = environment.baseUrl+"/allProductEntityTemplates/";
  
    // updat url
    private updateProductFamily = environment.baseUrl+"/updateProductFamilyWithAttachement";
    private updateProductLine = environment.baseUrl+"/updateProductLineWithAttachement";
    private updateProductEntityAttribute = environment.baseUrl+"/updateProductEntityTemplateAttributes";
    private updateEntityGroup = environment.baseUrl+"/updateEntityGroupsWithAttachement";
    private updateEntityTemplate = environment.baseUrl+"/updateProductEntityTemplates"
    private updateproducthierachydata = environment.baseUrl+"/updateProductHierarchy"
    private updateProductEntity = environment.baseUrl+"/updateProductEntityTemplates";
    private productEntityTemplateSectionID = environment.baseUrl+"/productEntityTemplateSection/";
    private updateProductEntityTemplateSectionHH = environment.baseUrl+"/updateProductEntityTemplateSection";
    private updateEmailTemplate = environment.baseUrl+"/updateEmailTemplate";
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
    private deleteEmailTemplate = environment.baseUrl+"/deleteEmailTemplate/";
    
    // change pass
      // authenvironment.accessToken
      private getverifyRandomPassword =environment.accessToken+"/users/varifyrandomcode/";
      private changePasswordWithRandomString =environment.accessToken+"/users/changePasswordWithRandomString";
      private changepassword =environment.accessToken+"/users/changepassword";
      private getForgotPasswordss =environment.accessToken+"/users/forgetPassword/";
      
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

    getproductHierarchy(url:string):Observable<any>{
      return this.http.get(environment.baseUrl+"/productHierarchy?"+url);
    }
  
  
    getEntityTemplate(url:string):Observable<any>{
      //return this.http.get(this.getEntityTemplate1+url);
    return this.http.get(environment.baseUrl+"/productEntityTemplates?"+url)
    }
  
    getEntityTemplateSection(url:string):Observable<any>{
      return this.http.get(this.getEntityTemplateSection1+url);
  
    }
    
  
    allSectionAndTabFromTemplateIdsearch(url:string):Observable<any>{
      return this.http.get(this.allSectionAndTabFromTemplateId+url);
  
    }
  
  
    getEntityTemplateAttributeidd1(id:any,sectionId,url):Observable<any>{
      
      return this.http.get(this.getEntityTemplateAttributeid1+id+"/"+sectionId+"?"+url);
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
         return this.http.put<any>(this.updateProductEntityTemplateSectionHH, data)
        }
  
  
     // updte 
     putProdEntity(data:any){
      return this.http.put<any>(this.updateProductEntity,data);
    }
  
      putProductFamily(data:FormData){
     
      return this.http.put(this.updateProductFamily, data)
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

    getsectionFrom(id:any):Observable<any>{
      return this.http.get(this.getsectionFromDetails+id);
    }
  
    getSideBar():Observable<any> {
      return this.http.get(environment.baseUrl + "/getHierarchialData");
     }
  
     getFromData(url:any):Observable<any> {
      return this.http.get(url);
    }
    
    getPatchTemplateData(){
      return this.http.get(this.getdynamicTemplateData);
    }
    
     public isStringUrl = new BehaviorSubject<any | undefined>("");
     emit<T>(value : any){
        this.isStringUrl.next(value);
      }
    on<T>():Observable<String | undefined>{
        return this.isStringUrl.asObservable();
      }

      getDynamicTableData(id:any,url:string):Observable<any>{
        return this.http.get(this.dynamicTemplateData+id+"?"+url);
      }

      postDynamicData(data:DynamicForm){
        return this.http.post(this.postDynamicFormData,data);
      }

      login(data):Observable<any>{
      
         return this.http.post(environment.accessToken+'/token/accessToken',data);
       }

       postNewUser(data:any){
        return this.http.post(this.createUser,data);
      }

      getAllRoles(){
        return this.http.get(this.getRoles);
      }

      getAlllUsers(url:any):Observable<any> {
        return this.http.get(this.getAllUsersUrl+url);
      }

      deleteUser(userEmail:string){
        return this.http.delete(this.deleteUserUrl+userEmail);
      }

      //Admin login
        
      adminLogin(data):Observable<any>{
        return this.http.post(environment.accessToken+'/token/admin/accessToken',data);
    }

   
    GetDataTableRoles(url:string):Observable<any>{
      return this.http.get(this.getRolesDatatable+url);
    }

    // get all users for assing role
    getallUser():Observable<any>{
      return this.http.get(this.getAllUsers);
    }
    // getroleslist
    getallRoles():Observable<any>{
      return this.http.get(this.getAllRolesList);
    }

    postRoles(data:assingroles){
      return this.http.post(this.postassingrole,data)
    }
    postCreateRole(data:assingroles){
      return this.http.post(this.postcreaterole,data)
    }

    postEmailTemplate(data:any){
      return this.http.post(this.postEmailTemlateUrl,data);
    }

    getAllEmailTemplate(url:string){
      return this.http.get(this.allEmailTemplate+url);
    }

    getEmailTemplateId(id:any){
    return  this.http.get(this.getEmailTempId+id)
    }

    postScheduleEmail(data:any){
      return this.http.post(this.postSchedule,data);
    }

    updateEmailTemplateId(data:any){
      return this.http.put(this.updateEmailTemplate,data);
    }

    deleteEmailTemplateId(tempId:number,updatedBy:number){
      return this.http.delete(this.deleteEmailTemplate+tempId+"/"+updatedBy)
    }

    getEmailTemplates(){
      return this.http.get(this.getEmailTemplate);
    }

      // change pass

    PostChangePassword(data:ChangePassword){
      return this.http.post(this.changepassword, data);
    }

    postNewUserPassword(data:ChangePassword){
      return this.http.post(this.setNewpassword,data);
    }
    postOldUser(data:any){
      return this.http.put(this.createUser1,data);
    }
    
getForgotPasswords(email:any ):Observable<any>{
  return this.http.get(this.getForgotPasswordss + email)
}

getVerifyRandomCodes(randomcode:any){
  return this.http.get(this.getverifyRandomPassword + randomcode,{observe:'response'})
}

PostChangePasswordWithRandomString(data : PostForgotPassword){
  return this.http.post(this.changePasswordWithRandomString, data);
}


getEmailTemplateVariables(){
  return this.http.get(this.getEmailTempateVariables);
}

getEmails(url:string) {
  console.log(this.allEmails+url);
  return this.http.get(this.allEmails+url);
}

resendEmail(jobId:string) {
  console.log(jobId);
  
  return this.http.get(this.resentEmail+jobId);
}

languageService = new BehaviorSubject('en');

getUserProfile(id:any){
return this.http.get(this.userProfileUrl+id)
}

postUserProfile(data:any){
  return this.http.post(this.updateProfileUrl,data);
}


// number management
  getnumberType(url:string):Observable<any>{
    return this.http.get(environment.baseUrl+"/numberTypeDefinition?"+url);
  }

  getnumberTypeID(id: any) {
    return this.http.get(environment.baseUrl+"/numberTypeDefinition/"+id);
  }

  updatenumberType(value: any) {
    return this.http.put(environment.baseUrl+"/updateNumberTypeDefinition",value);
  }

  deletenumberType(id){
    return this.http.delete(environment.baseUrl+"/deleteNumberTypeDefinition/"+id+"/"+ JSON.parse(sessionStorage.getItem('userDetails')).userId);
  }
  
  createNumberType(data){
    return this.http.post(environment.baseUrl+"/createNumberTypeDefinition",data);
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
}

