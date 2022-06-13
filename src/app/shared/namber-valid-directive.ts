import {  Directive, HostListener } from '@angular/core';
@Directive({
    selector: '[validTestValue]'
  })
  export class NumberDirective {
  
    @HostListener('document:keyup', ['$event'])
    onKeyUp(event:KeyboardEvent): boolean {
        console.log(event);
        // console.log(event.target.attributes.formcontrolname.nodeValue);
        
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          return false;
        }
        console.log("true");
        return true;
    
      }
  }