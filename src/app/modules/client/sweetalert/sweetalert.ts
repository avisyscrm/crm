import Swal from "sweetalert2"

// update
export function RecordUpdated() {
    Swal.fire( {
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
      })

  }

  // add
  export function RecordAdded() {

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
      })
  }

  export function CreateRole() {
    Swal.fire( {
        title: 'Success',
        text: 'Role added successfully ',
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

  export function RoleAssigned() {
    Swal.fire( {
        title: 'Success',
        text: 'Role Assigned successfully ',
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

  export function UserCreated() {
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
      })
  }

  export function PasswordUpdate() {
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
      })
  }

  export function SelectRecord() {
    Swal.fire( {
        text: 'Please select a record ',
        icon: 'warning',
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