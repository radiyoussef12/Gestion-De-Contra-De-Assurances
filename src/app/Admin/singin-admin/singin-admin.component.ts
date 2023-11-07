import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


import { AbstractControl, FormControl, FormGroup, UntypedFormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';


import { MatSnackBar } from '@angular/material/snack-bar';





export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
  
    if (password && confirmPassword  && password !== confirmPassword ) {
      return { passwordsDontMatch: true };
    } else {
      return null;
    }

   
    
   
  };
}
@Component({
  selector: 'app-singin-admin',
  templateUrl: './singin-admin.component.html',
  styleUrls: ['./singin-admin.component.css']
})
export class SinginAdminComponent implements OnInit{
  ngOnInit(): void {
  
  }
  constructor(private authService: AuthenticationService, 
    private router: Router,
  private _snackBar : MatSnackBar

  
    ){}


    signUpFormAdmin = new FormGroup({
      name:new FormControl('', [Validators.required]),
      last:new FormControl('', [Validators.required]),
      code:new FormControl('', [Validators.required]),



      email:new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required,]),
      confirmPassword:new FormControl('',[Validators.required,])
      
    },
   
    { validators : passwordsMatchValidator() });
    get email() {
      return this.signUpFormAdmin.get('email');
    }
  




    get last() {
      return this.signUpFormAdmin.get('last');
    }
    get code() {
      return this.signUpFormAdmin.get('code');
    }
    get password() {
      return this.signUpFormAdmin.get('password');
    }
  
    get confirmPassword() {
      return this.signUpFormAdmin.get('confirmPassword');
    }
  
    get name() {
      return this.signUpFormAdmin.get('name');
    }
    
  submitA() {
    const { name, email, password, code } = this.signUpFormAdmin.value;

    if (!this.signUpFormAdmin.valid || !name || !password || !email || ! this.last || !this.code ) {
      this.openSnackBar("form invaid", "OK")

      return;
    }
  

    // this.authService.signUp(name,email, password).pipe(
    //   this.toast.observe({
      
    //     success: 'Congrats! You are all signed up',
    //     loading: 'Signing up...',
    //     error: ({ message }) => `${message}`,
    //   })
    // )
    // .subscribe(() => {
    //   this.router.navigate(['/client']);
    // });

if( code=='A-18'){  


    this.authService.signUp(name,email, password)
  .subscribe(() =>{
      this.router.navigate([ '/client' ]);
       
     this.openSnackBar("Welcom", "OK")

   },
  () =>{
     //do your error logic here
    //  alert("Login wasn't successful");
     this.openSnackBar("sining wasn't successful", "OK")

  });
}
else{
  this.openSnackBar(" Code is not correct", "OK")

}
    
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
