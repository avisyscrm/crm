import Swal from "sweetalert2"

// update
export function RecordUpdated() {
    Swal.fire( {
        title: 'Updated',
        text: 'Your data is been Updated ',
        icon: 'success',
        confirmButtonText: 'Ok',
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
        confirmButtonText: 'Ok',
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
        text: 'Role Added successfully ',
        icon: 'success',
        confirmButtonText: 'Ok',
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
        confirmButtonText: 'Ok',
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
        text: 'User Created successfully ',
        icon: 'success',
        confirmButtonText: 'Ok',
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
        text: 'Please select the record ',
        icon: 'warning',
        confirmButtonText: 'Ok',
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