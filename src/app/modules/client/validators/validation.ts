import { AbstractControl } from "@angular/forms";

 export function zipCode(control: AbstractControl){
    if(control.value !== null ){
        const regex = new RegExp('^[0-9]{6}$');
        console.log(regex.test(control.value))
        if(!regex.test(control.value)){
            return {
                isError: true
            }
        }

        // return { 
        //     'isError': true
        // }
    }
    return null;
 }

//  Number Validation
 export function onlyNumber(control: AbstractControl){
     if(control.value !== null){
        const digitCode = new RegExp('^[0-9]*$');
        if(!digitCode.test(control.value)){
            console.log(digitCode.test(control.value));
            
            return{
                isDigit: true
            }
        }
     }
     return null;
 }


//  Character Validation
export function onlyChar(control: AbstractControl){
    if(control.value !== null){
       const charCode = new RegExp('^[a-zA-Z ]*$');
       if(!charCode.test(control.value)){
           return{
               isChar: true
           }
       }
    }
    return null;
}

// Alpa Numeric

export function alphaNumeric(control: AbstractControl){
    if(control.value !== null){
       const charAN = new RegExp('^[A-Za-z0-9 ]+$');
       if(!charAN.test(control.value)){
           return{
               isAlphaNum: true
           }
       }
    }
    return null;
}

// no empty space
export function noWhitespace(control: AbstractControl){
    if(control.value !== null ){
        const regexWs = new RegExp(/^(\s+\S+\s*)*(?!\s).*$/);
        console.log(!regexWs.test(control.value), "ws")
        if(!regexWs.test(control.value)){
            return {
                isWhiteSpace: true
            }
        }

        // return { 
        //     'isError': true
        // }
    }
    return null;
 }


//  select 
export function selectValidation(control: AbstractControl){
    if(control.value !== null ){
        if(control.value == ""){
            return {
                isSelect: true
            }
        }
    }
    return null;
 }

