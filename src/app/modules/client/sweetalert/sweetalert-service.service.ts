import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetalertServiceService {

  constructor(private router: Router) { }

  // Password Updated
  PasswordUpdateURL(path:any) {
    Swal.fire( {
        title: 'Success',
        text: 'Password Updated',
        icon: 'success',
        confirmButtonText: 'OK',
        showClass: {
          backdrop: 'swal2-noanimation', // disable backdrop animation
          popup: '',                     // disable popup animation
          icon: ''                       // disable icon animation
        },
        hideClass: {
          popup: '',                     // disable popup fade-out animation
        },
      }).then(() => {
        this.router.navigate([path]); // navigate to other page
      })
  }

  // User created
   UserCreatedURL(path:any) {
    Swal.fire( {
        title: 'Success',
        text: 'User created successfully ',
        icon: 'success',
        confirmButtonText: 'OK',
        showClass: {
          backdrop: 'swal2-noanimation', // disable backdrop animation
          popup: '',                     // disable popup animation
          icon: ''                       // disable icon animation
        },
        hideClass: {
          popup: '',                     // disable popup fade-out animation
        },
      }).then(() => {
        this.router.navigate([path]); // navigate to other page
      })
  }
}
