import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';
import { CrmservicesService } from '../../crm/crm-services/crmservices.service';
import { AllservicesService } from '../services/allservices.service';
@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.scss']
})
export class LeftmenuComponent implements OnInit {
  isCollapsed = true;
  isProjectCollapsed = true;
  isJobportalCollapsed = true;
  isTemplateCollapsed = true;
  isAuthCollapsed = true;
  isStaticticsCollapsed = true;
  isFriendsCollapsed = true;
  isDropDownCollapsed = true;
  isCommunication = true;
  isNotification = true;
  isNotificationTemplate = true;
  isLogging = true;
  isAuditTrails= true;
  isCMS = true;
  isDataAdmin = true;
  isIntergration = true;
  isReports = true;
  contactTab: boolean;
  chatTab: boolean = true;
  toggle1: boolean;
  toggle2: boolean;
  toggle3: boolean = true;
  toggle4: boolean;
  toggle5: boolean;
  toggle6: boolean;
  toggle7: boolean;
  toggle8: boolean;
  toggle9: boolean;
  toggle10: boolean;
  fontSelect: any;
  menuIconSelect: any;
  staticscard: boolean = true;
  friendscard: boolean = true;
  sidebar:any=[];
  crmisActive:boolean = false;
  productisActive:boolean = false;
  crmAdminActive:boolean = false
  numberisActive:boolean = false;
  adminMenuList:any=[
    {
     name: "Dashaboard",
     isHeading:true,
     iconClass:"icon-speedometer",
     isGheading:false,
     routerLink:false,
     dynamicMenuOpen:false,
     translationKey:'',
    },
    {
      name:"User Management",
      controlId:"collapseBasic",
      isCollapsed: true,
      isHeading:false,
      iconClass:"icon-user",
      dynamicMenuOpen:false,
      translationKey:'',
      submenu:[
          {
            name:"Users",
            routerLink:['/crm/user-all'],
            translationKey:'',
          },
          {
          name:"Roles",
          routerLink:['/crm/adminRole-table'],
          translationKey:'',
        },
        {
          name:"Assign Role",
          routerLink:['/crm/assign-role'],
          translationKey:'',
        }
      ]
   },
   {
    name: "Email Templates",
    isHeading:true,
    iconClass:"icon-plus",
    isGheading:false,
    routerLink:['/crm/emailTemplate'],
    dynamicMenuOpen:false,
    translationKey:'',
   },
   {
    name: "Emails",
    isHeading:true,
    iconClass:"icon-envelope",
    isGheading:false,
    routerLink:['/crm/emails'],
    dynamicMenuOpen:false,
    translationKey:'',
   },
   {
    name: "Schedule Email",
    isHeading:true,
    iconClass:"icon-plus",
    isGheading:false,
    routerLink:['/crm/scheduleEmail'],
    dynamicMenuOpen:false,
    translationKey:'',
   },
   {
    name: "Drop Down /LOVs",
    isHeading:true,
    iconClass:"icon-plus",
    isGheading:false,
    routerLink:false,
    dynamicMenuOpen:false,
    translationKey:'',
   },
   {
    name: "Communication",
    isHeading:true,
    iconClass:"icon-plus",
    isGheading:false,
    routerLink:false,
    dynamicMenuOpen:false,
    translationKey:'',
   },
   {
    name: "Notification",
    isHeading:true,
    iconClass:"icon-plus",
    isGheading:false,
    routerLink:false,
    dynamicMenuOpen:false,
    translationKey:'',
   },
   {
    name: "Notification Template",
    isHeading:true,
    iconClass:"icon-plus",
    isGheading:false,
    routerLink:false,
    dynamicMenuOpen:false,
    translationKey:'',
   },
   {
    name: "Logging",
    isHeading:true,
    iconClass:"icon-plus",
    isGheading:false,
    routerLink:false,
    dynamicMenuOpen:false,
    translationKey:'',
   },
   {
    name: "Audit Trails",
    isHeading:true,
    iconClass:"icon-plus",
    isGheading:false,
    routerLink:false,
    dynamicMenuOpen:false,
    translationKey:'',
   },
   {
    name: "CMS",
    isHeading:true,
    iconClass:"icon-plus",
    isGheading:false,
    routerLink:false,
    dynamicMenuOpen:false,
    translationKey:'',
   },
   {
    name: "Data Adminstration",
    isHeading:true,
    iconClass:"icon-plus",
    isGheading:false,
    routerLink:false,
    dynamicMenuOpen:false,
    translationKey:'',
   },
   {
    name: "Intergration",
    isHeading:true,
    iconClass:"icon-plus",
    isGheading:false,
    routerLink:false,
    dynamicMenuOpen:false,
    translationKey:'',
   },
   {
    name: "Reports",
    isHeading:true,
    iconClass:"icon-plus",
    isGheading:false,
    routerLink:false,
    dynamicMenuOpen:false,
    translationKey:'',
   }
   ];
  productMenuList:any =[
    {
      name:"Masters",
      controlId:"collapseBasicMaster",
      isCollapsed: true,
      isHeading:false,
      iconClass:"icon-rocket",
      dynamicMenuOpen:false,
      translationKey:'masters_main_menu_title',
      submenu:[
          {
            name:"Product Family",
            routerLink:['/crm/product-family'],
            translationKey:'master_submenu_product_family',
          },
          {
          name:"Product Line",
          routerLink:['/crm/product-line'],
          translationKey:'master_submenu_product_line',
          },
          {
          name:"Entity Group",
          routerLink:['/crm/entity-groups'],
          translationKey:'master_submenu_entity_group',
        },{
          name:"Product Hierachy",
          routerLink:['/crm/product-hierachy'],
          translationKey:'master_submenu_product-hierachy',
          
        },
        {
          name:"Product Entity Type",
          routerLink:['/crm/product-entity-type'],
          translationKey:'master_submenu_product-entity-type',
          
        }
      ]
   },
   {
    name:"Product Template",
    controlId:"collapseBasicProduct",
    isCollapsed: true,
    isHeading:false,
    iconClass:"icon-rocket",
    dynamicMenuOpen:false,
    translationKey:'product_main_menu_title',
    submenu:[
        {
          name:"Product Template",
          routerLink:['/crm/product-templates'],
          translationKey:'product_submenu_product_template',
        },
      //   {
      //   name:"Product Tab",
      //   routerLink:['/crm/product-tabs'],
      //   translationKey:'product_submenu_product_tab',
      //   },
      //   {
      //   name:"Product Attribute",
      //   routerLink:['/crm/product-attribute'],
      //   translationKey:'product_submenu_product_attribute',
      // },
      {
        name:"Product Atribute Summmary",
        routerLink:['/crm/Product-Atribute-Summmary'],
        translationKey:'product_submenu_product_attribute_summary',
      }
    ]
    },
    {
      name: "Dynamic Form",
      isHeading:true,
      iconClass:"icon-tag",
      isGheading:false,
      routerLink:false,
      dynamicMenuOpen:true
     }
  ]
  NumberMenuList:any =[
    {
      name:"Number Management",
      controlId:"collapseBasicNumbers",
      isCollapsed: true,
      isHeading:false,
      iconClass:"icon-rocket",
      dynamicMenuOpen:false,
      translationKey:'masters_main_menu_title',
      submenu:[
          // {
          //   name:"Number Type",
          //   routerLink:['/number/numberType'],
          //   translationKey:'master_submenu_product_family',
          // },
          {
            name:"Number Type Table",
            routerLink:['/number/numberTypeTable'],
            translationKey:'master_submenu_product_family',
          },
          {
            name:"Number Format",
            routerLink:['/number/numberFormatAll'],
            translationKey:'master_submenu_product_family',
          },
          {
            name:"Number Scheme",
            routerLink:['/number/numberScheme'],
            translationKey:'master_submenu_product_family',

          },{
            name:"Block Defination",
            routerLink:['/number/blockDefination'],
            translationKey:'master_submenu_product_family',
          },{
            name:"Vanity Number",
            routerLink:['/number/vanityNumber'],
            translationKey:'master_submenu_product_family',
          },{
            name:"Generated Number",
            routerLink:['/number/generatedNumber'],
            translationKey:'master_submenu_product_family',
          },
          {
            name:"Number Configuration",
            routerLink:['/number/number-scheme-configuration'],
            translationKey:'master_submenu_product_family',
          },
          {
            name:"Vanity Number Pattern",
            routerLink:['/number/number-pattern-rules'],
            translationKey:'master_submenu_product_family',
          },
          {
            name:"Number Generation",
            routerLink:['/number/number-generation'],
            translationKey:'master_submenu_product_family',
          }
      ]
   }
  ]
  menuList:any = [];


  open(){
    this.allserviceService.getSideBar().subscribe(sucess=>{
      this.sidebar=sucess;
    
    });
  }
  constructor(private allserviceService:CrmservicesService,private router: Router, private activateRoute: ActivatedRoute,
     @Inject(AppComponent) private app: AppComponent,public translate: TranslateService) {
    if ((this.router.url).includes('hr')) {
      this.isCollapsed = false;
    }

    if ((this.router.url).includes('product')) {
      this.isTemplateCollapsed = false;
    }
    if ((this.router.url).includes('jobportal')) {
      this.isJobportalCollapsed = false;
    }
    if ((this.router.url).includes('auth')) {
      this.isAuthCollapsed = false;
    }

// 
let dataProp:string = sessionStorage.getItem('dataProp');
console.log(this.NumberMenuList);
      if (dataProp == "crmActive"){
        this.crmisActive = true;
        this.crmAdminActive=false;
        this.productisActive = false;
      }
      else if  (dataProp =="productActive"){
        this.crmisActive = false;
        this.crmAdminActive=false;
        this.productisActive = true;
        this.menuList = this.productMenuList;
      }
      else if(dataProp == "crmAdminLogin"){
        this.crmisActive = false;
        this.productisActive = false;
        this.crmAdminActive=true;
        this.menuList = this.adminMenuList;
      } else if (dataProp == "numberActive"){
        this.crmisActive = false;
        this.crmAdminActive=false;
        this.productisActive = false;
        this.numberisActive = true;
        this.menuList = this.NumberMenuList;
      
        
      }

// 


  // To Show side bar active menu
  // this.activateRoute.queryParams.subscribe(data =>{
  //   //  alert(JSON.stringify(data) );  
  //     // alert(JSON.stringify(data.prop))
  //     sessionStorage.setItem('dataProp',data.prop);
  //     let dataProp:string = sessionStorage.getItem('dataProp');
  //     if (dataProp == "crmActive"){
  //       this.crmisActive = true;
  //       this.crmAdminActive=false;
  //       this.productisActive = false;
        
  //     }
  //     else if  (dataProp =="productActive"){
  //       this.crmisActive = false;
  //       this.crmAdminActive=false;
  //       this.productisActive = true;
  //     }
  //     else if(dataProp == "crmAdminLogin"){
  //       this.crmisActive = false;
  //       this.productisActive = false;
  //       this.crmAdminActive=true;
  //     }
     
  //   })
  // 
  }

  
  

  // 
  ulP1(i:any){
    let id=document.getElementById(i);
    let id1=document.getElementById('x'+i)
 if(id?.classList.toString()=='nested active'){
  id?.classList.toggle('active');
  id1?.classList.toggle('caret-down')
 }else{
      id?.classList.add('active');
      id1?.classList.add('caret-down')
     }
 
  }

  press(data:String | undefined,name){
    this.router.navigate(['/crm/dynamicDataTable']);
    this.allserviceService.isStringUrl.next({data:data,name:name});
  }

  ulP2(j:any){
    let id=document.getElementById(j);
    let id1=document.getElementById('xx'+j);
    if(id?.classList.toString()=='nested active'){
     id?.classList.toggle('active');
     id1?.classList.toggle('caret-down')
    }else{
         id?.classList.add('active');
         id1?.classList.add('caret-down')
        }
  }

  ulP3(k:any){
    let id=document.getElementById(k);
    let id1=document.getElementById('xxx'+k);
    if(id?.classList.toString()=='nested active'){
     id?.classList.toggle('active');
     id1?.classList.toggle('caret-down')
    }else{
         id?.classList.add('active');
         id1?.classList.add('caret-down')
        }
  }



  ngOnInit(): void {

  }

  ngAfterViewInit() {
    let pThis: any = this;
    setTimeout(() => {
      // debugger
      if (sessionStorage.getItem("Font1") != "" && sessionStorage.getItem("Font1") != null) {
        this.fontSelect = sessionStorage.getItem("Font1");
      }
      else {
        this.fontSelect = '';
      }
      if (sessionStorage.getItem("MenuIcon") != "" && sessionStorage.getItem("MenuIcon") != null) {
        this.menuIconSelect = sessionStorage.getItem("MenuIcon");
        if (this.menuIconSelect == 'list-a') {
          this.onSubMenuIcon(1)
        }
        else if (this.menuIconSelect == 'list-b') {
          this.onSubMenuIcon(2)
        }
        else if (this.menuIconSelect == 'list-c') {
          this.onSubMenuIcon(3)
        }
      }
      else {
        this.menuIconSelect = '';
      }

      if (sessionStorage.getItem("Toggle") != "" && sessionStorage.getItem("Toggle") != null) {
        this.toggle1 = true;
      }
      else {
        this.toggle1 = false;
      }
      if (sessionStorage.getItem("Toggle2") != "" && sessionStorage.getItem("Toggle2") != null) {
        this.toggle2 = true;
      }
      else {
        this.toggle2 = false;
      }
      if (sessionStorage.getItem("Toggle3") != "" && sessionStorage.getItem("Toggle3") != null) {
        pThis.toggle3 = true;
      }
      else {
        pThis.toggle3 = false;
      }
      if (sessionStorage.getItem("Toggle4") != "" && sessionStorage.getItem("Toggle4") != null) {
        this.toggle4 = true;
      }
      else {
        this.toggle4 = false;
      }
      if (sessionStorage.getItem("Toggle5") != "" && sessionStorage.getItem("Toggle5") != null) {
        this.toggle5 = true;
      }
      else {
        this.toggle5 = false;
      }
      if (sessionStorage.getItem("Toggle6") != "" && sessionStorage.getItem("Toggle6") != null) {
        this.toggle6 = true;
      }
      else {
        this.toggle6 = false;
      }
      if (sessionStorage.getItem("Toggle7") != "" && sessionStorage.getItem("Toggle7") != null) {
        this.toggle7 = true;
      }
      else {
        this.toggle7 = false;
      }
      if (sessionStorage.getItem("Toggle8") != "" && sessionStorage.getItem("Toggle8") != null) {
        this.toggle8 = true;
      }
      else {
        this.toggle8 = false;
      }
      if (sessionStorage.getItem("Toggle9") != "" && sessionStorage.getItem("Toggle9") != null) {
        this.toggle9 = true;
      }
      else {
        this.toggle9 = false;
      }
      if (sessionStorage.getItem("Toggle10") != "" && sessionStorage.getItem("Toggle10") != null) {
        this.toggle10 = true;
      }
      else {
        this.toggle10 = false;
      }

      const haderClassName = document.getElementById("page_top");
      if (sessionStorage.getItem("HeaderClass") != "" && sessionStorage.getItem("HeaderClass") != null) {
        haderClassName.classList.add(sessionStorage.getItem("HeaderClass"));
      }
      else {
        haderClassName.classList.remove("top_dark");
      }
      const minSideClassName = document.getElementById("header_top");
      if (sessionStorage.getItem("MinSideClass") != "" && sessionStorage.getItem("MinSideClass") != null) {
        minSideClassName.classList.add(sessionStorage.getItem("MinSideClass"));
      }
      else {
        minSideClassName.classList.remove("dark");
      }

      if (sessionStorage.getItem("Toggle2") != "" && sessionStorage.getItem("Toggle2") != null) {
        document.getElementById('page_top').classList.add('sticky-top');
        document.getElementsByClassName('fixNavMargin')[0].classList.add('marginTop');
      }
      else {
        document.getElementById('page_top').classList.remove('sticky-top');
        document.getElementsByClassName('fixNavMargin')[0].classList.remove('marginTop');
      }

      const className = document.getElementsByClassName('card');
      const className1 = document.getElementsByClassName('btn');
      const className2 = document.getElementsByClassName('progress');
      const classArray = [className, className1, className2];
      for (let index = 0; index < classArray.length; index++) {
        const classIndex = classArray[index];
        for (let index = 0; index < classIndex.length; index++) {
          const element = classIndex[index];
          if (sessionStorage.getItem("BoxShadow") != "" && sessionStorage.getItem("BoxShadow") != null) {
            element.classList.add('box_shadow');
          }
          else {
            element.classList.remove('box_shadow');
          }
        }
      }
      console.log(this.toggle3);
    });
  }


  onTab(number) {
    this.chatTab = false;
    this.contactTab = false;
    if (number == '1') {
      this.chatTab = true;
    }
    else if (number == '2') {
      this.contactTab = true;
    }
  }

  onFontStyle(type) {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('font-opensans');
    body.classList.remove('font-montserrat');
    body.classList.remove('font-roboto');
    sessionStorage.setItem("Font1", "");
    if (type == 1) {
      body.classList.add('font-opensans');
      sessionStorage.setItem("Font1", "font-opensans");
    }
    else if (type == 2) {
      body.classList.add('font-montserrat');
      sessionStorage.setItem("Font1", "font-montserrat");
    }
    else if (type == 3) {
      body.classList.add('font-roboto');
      sessionStorage.setItem("Font1", "font-roboto");
    }
  }

  onSubMenuIcon(type) {
    // debugger
    const submenuIconclass = document.getElementsByClassName('submenu');
    for (let index = 0; index < submenuIconclass.length; index++) {
      const element = submenuIconclass[index];
      element.classList.remove('list-a');
      element.classList.remove('list-b');
      element.classList.remove('list-c');
      sessionStorage.setItem("MenuIcon", "");
      if (type == 1) {
        element.classList.add('list-a');
        sessionStorage.setItem("MenuIcon", "list-a");
      }
      else if (type == 2) {
        element.classList.add('list-b');
        sessionStorage.setItem("MenuIcon", "list-b");
      }
      else if (type == 3) {
        element.classList.add('list-c');
        sessionStorage.setItem("MenuIcon", "list-c");
      }

    }

  }

  toggleUserMenu() {
    const body = document.getElementsByClassName('user_div')[0];

    if (body.classList.contains('open')) {
      body.classList.remove('open');
    }
    else {
      body.classList.add('open');
    }
    document.getElementsByClassName('overlay')[0].classList.toggle("open");
  }
  toggleSettingMenu() {
    const body = document.getElementsByClassName('right_sidebar')[0];

    if (body.classList.contains('open')) {
      body.classList.remove('open');
    }
    else {
      body.classList.add('open');
    }
    document.getElementsByClassName('overlay')[0].classList.toggle("open");
  }

  onGeneralSetting(type, e) {

    const body = document.getElementsByTagName('body')[0];

    if (type == 1) {
      body.classList.toggle('dark-mode');
      if (e.target.checked) {
        this.toggle1 = true;
        sessionStorage.setItem("Toggle", "true");
      }
      else {
        this.toggle1 = false;
        sessionStorage.setItem("Toggle", "");
      }
    }
    else if (type == 2) {
      document.getElementById('page_top').classList.toggle('sticky-top');
      document.getElementsByClassName('fixNavMargin')[0].classList.toggle('marginTop');

      if (e.target.checked) {
        this.toggle2 = true;
        sessionStorage.setItem("Toggle2", "true");
      }
      else {
        this.toggle2 = false;
        sessionStorage.setItem("Toggle2", "");
      }
    }
    else if (type == 3) {
      if (e.target.checked) {
        this.toggle3 = true;
        sessionStorage.setItem("Toggle3", "true");
      }
      else {
        this.toggle3 = false;
        sessionStorage.setItem("Toggle3", "");
      }

      document.getElementById("page_top").classList.toggle("top_dark");
      if (e.target.checked) {
        sessionStorage.setItem("HeaderClass", "top_dark");
      }
      else {
        sessionStorage.setItem("HeaderClass", "");
      }
    }
    else if (type == 4) {
      if (e.target.checked) {
        this.toggle4 = true;
        sessionStorage.setItem("Toggle4", "true");
      }
      else {
        this.toggle4 = false;
        sessionStorage.setItem("Toggle4", "");
      }
      document.getElementById("header_top").classList.toggle("dark")
      if (e.target.checked) {
        sessionStorage.setItem("MinSideClass", "dark");
      }
      else {
        sessionStorage.setItem("MinSideClass", "");
      }
    }
    else if (type == 5) {
      if (e.target.checked) {
        this.toggle5 = true;
        sessionStorage.setItem("Toggle5", "true");
      }
      else {
        this.toggle5 = false;
        sessionStorage.setItem("Toggle5", "");
      }
      body.classList.toggle('sidebar_dark');
    }
    else if (type == 6) {
      if (e.target.checked) {
        this.toggle6 = true;
        sessionStorage.setItem("Toggle6", "true");
      }
      else {
        this.toggle6 = false;
        sessionStorage.setItem("Toggle6", "");
      }
      body.classList.toggle('iconcolor');
    }
    else if (type == 7) {
      if (e.target.checked) {
        this.toggle7 = true;
        sessionStorage.setItem("Toggle7", "true");
      }
      else {
        this.toggle7 = false;
        sessionStorage.setItem("Toggle7", "");
      }
      body.classList.toggle('gradient');
    }
    else if (type == 8) {
      if (e.target.checked) {
        this.toggle8 = true;
        sessionStorage.setItem("Toggle8", "true");
      }
      else {
        this.toggle8 = false;
        sessionStorage.setItem("Toggle8", "");
      }
      const className = document.getElementsByClassName('card');
      const className1 = document.getElementsByClassName('btn');
      const className2 = document.getElementsByClassName('progress');
      const classArray = [className, className1, className2];
      for (let index = 0; index < classArray.length; index++) {
        const classIndex = classArray[index];
        for (let index = 0; index < classIndex.length; index++) {
          const element = classIndex[index];
          if (e.target.checked) {
            element.classList.add('box_shadow');
            sessionStorage.setItem("BoxShadow", "box_shadow");
          }
          else {
            element.classList.remove('box_shadow');
            sessionStorage.setItem("BoxShadow", "");
          }
        }
      }

    }
    else if (type == 9) {
      if (e.target.checked) {
        this.toggle9 = true;
        sessionStorage.setItem("Toggle9", "true");
      }
      else {
        this.toggle9 = false;
        sessionStorage.setItem("Toggle9", "");
      }
      body.classList.toggle('rtl');
    }
    else if (type == 10) {
      if (e.target.checked) {
        this.toggle10 = true;
        sessionStorage.setItem("Toggle10", "true");
      }
      else {
        this.toggle10 = false;
        sessionStorage.setItem("Toggle10", "");
      }
      body.classList.toggle('boxlayout');
    }
  }

  toggleMenu() {
    const body = document.getElementsByTagName('body')[0];

    if (body.classList.contains('offcanvas-active')) {
      body.classList.remove('offcanvas-active');
    }
    else {
      body.classList.add('offcanvas-active');
    }
  }
  cToggoleMenu() {
    const body = document.getElementsByTagName('body')[0].classList.remove("offcanvas-active");
    document.getElementsByClassName('overlay')[0].classList.toggle("open");
  }

  CardRemoveStatics() {
    this.staticscard = false;
  }
  CardRemoveFriends() {
    this.friendscard = false;
  }

}
