import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetalertServiceService {

  constructor(private router: Router) { }

  // Password Updated
  PasswordUpdateURL(path: any) {
    Swal.fire({
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
  UserCreatedURL(path: any) {
    Swal.fire({
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

  passwordChanged(path: any) {
    Swal.fire({
      title: '',
      text: 'Password changed successfully ',
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
  // Enter your email address and your password will be reset and emailed to you.
  mailcheck(path: any) {
    Swal.fire({
      title: '',
      text: 'Please check your Email. ',
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

  // update
  RecordUpdated(path: any) {
  Swal.fire({
    title: 'Updated',
    text: 'Your data is Updated ',
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

// add
 RecordAdded(path: any) {
  Swal.fire({
    title: 'Added',
    text: 'Record added successfully ',
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

roleAssigned() {
  Swal.fire({
    text: 'Role Assigned Successfully',
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
  })
}

recordDeleted(){
  Swal.fire(
    {
      title: 'Deleted',
      text: 'Your data has been deleted ',
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
    }
  )
}


}

