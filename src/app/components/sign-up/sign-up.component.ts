import { OnInit } from '@angular/core';
import { Component } from '@angular/core';


import { AbstractControl, FormControl, FormGroup, UntypedFormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormBuilder} from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsDontMatch: true };
    } else {
      return null;
    }
  };
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  ngOnInit(): void {
  
  }
  constructor(private authService: AuthenticationService, private toast: HotToastService,
    private router: Router,
  private _snackBar : MatSnackBar

  
    ){}


    signUpForm = new FormGroup({
      name:new FormControl('', [Validators.required]),

      email:new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required,]),
      confirmPassword:new FormControl('',[Validators.required,])
      
    },
   
    { validators : passwordsMatchValidator() });
    get email() {
      return this.signUpForm.get('email');
    }
  
    get password() {
      return this.signUpForm.get('password');
    }
  
    get confirmPassword() {
      return this.signUpForm.get('confirmPassword');
    }
  
    get name() {
      return this.signUpForm.get('name');
    }
    
  submit() {
    const { name, email, password } = this.signUpForm.value;

    if (!this.signUpForm.valid || !name || !password || !email) {

      this.openSnackBar("form invaid", "OK");
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


    this.authService.signUp(name,email, password)
  .subscribe((res) =>{
      this.router.navigate([ '/client' ]); 
     this.openSnackBar("Welcom", "OK")

   },
  (err) =>{
     //do your error logic here
    //  alert("Login wasn't successful");
     this.openSnackBar("sining wasn't successful", "OK")

  });

    
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
