import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { ChatComponent } from './modules/client/chat/chat.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Epic';
  greenClass: any;
  orageClass: boolean;
  blushClass: boolean;
  cyanClass: boolean = true;
  timberClass: boolean;
  blueClass: boolean;
  amethystClass: boolean;


  
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) { 
    // debugger
    // this.router.navigate(['/forgot-pass-forms']);
    // console.log(router.url);
    // console.log(this.activatedRoute.snapshot);
    // alert("current window url"+window.location.pathname);

    // console.log("current window url"+window.location.pathname);
    

    //   if ((this.router.url).includes('forgot-pass')) {
    //     console.log(" yogesh ");
    //     this.router.navigate(['/forgot-pass-forms']);
    //   }

    }
  ngOnInit(): void {
    sessionStorage.setItem("MinSideClass", "");
    sessionStorage.setItem("HeaderClass", "top_dark");
    sessionStorage.setItem("Font1", "font-montserrat");
    sessionStorage.setItem("MenuIcon", "list-a");
    sessionStorage.setItem("Toggle", "");
    sessionStorage.setItem("Toggle2", "");
    sessionStorage.setItem("Toggle3", "true");
    sessionStorage.setItem("Toggle4", "");
    sessionStorage.setItem("Toggle5", "");
    sessionStorage.setItem("Toggle6", "");
    sessionStorage.setItem("Toggle7", "");
    sessionStorage.setItem("Toggle8", "");
    sessionStorage.setItem("Toggle9", "");
    sessionStorage.setItem("Toggle10", "");
    // console.log(this.router);
    
    // if(sessionStorage.getItem('access_token')!=null && sessionStorage.getItem('access_token')!=undefined){
    //   this.router.navigate(['/crm']);
    // } 
    // else if ((window.location.pathname).includes('forgot-pass-forms')) {
    //   // console.log("activated :"+this.activatedRoute.snapshot);
    //   let verificationCode = window.location.search.substring(window.location.search.indexOf('=')+1,window.location.search.length);
    //   this.router.navigate(['/forgot-pass-forms'],{ queryParams: { verificationCode: verificationCode } });
    // }
  
    // else{
    //   this.router.navigate(['/login']);
    //   // this.router.navigate(['/forgot-pass-forms']);
    // }
    
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    )
      .subscribe(() => {

        var rt = this.getChild(this.activatedRoute)

        rt.data.subscribe(data => {
          this.titleService.setTitle(data.title)
        })
      });

    setTimeout(() => {

      document.getElementsByClassName('page-loader-wrapper')[0].classList.add("HideDiv");

    }, 1000);
  }

  getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }

  }
  toggleThemeSetting() {
    const className = document.getElementsByClassName('themesetting')[0];
    className.classList.toggle('open');
  }


  closeMenu() {
    document.getElementsByClassName('right_sidebar')[0].classList.remove("open");
    document.getElementsByClassName('user_div')[0].classList.remove("open");
    document.getElementsByClassName('overlay')[0].classList.remove("open");
  }
}
