
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  isLoggingIn = false;
  isRecoveringPassword = false;

 constructor(private authService: AuthenticationService,
  private router: Router,
  private toast: HotToastService,
  private _snackBar : MatSnackBar
  ){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  loginForm = new FormGroup({
    email:new UntypedFormControl('', [Validators.required, Validators.email]),
    password:new UntypedFormControl(''),
  });
  get email() {
    return this.loginForm.get('email');
  }
  

  get password() {
    return this.loginForm.get('password');
  }
  submit(){
    if(!this.loginForm.valid){
      return;
    }
    const {email ,password}=this.loginForm.value;
  //   this.authService.login(email,password)
  //   .pipe(
    
  //     this.toast.observe({
  //     //  success:( '!Logged in successfully'),
  //     //  loading: ('!Logging in...'),
     
  //      error: ({ message }) => `Alert!There was an error in your login: ${message} `,
  //    }),
     
    

  //  )
  //   .subscribe(()=>{
  //     this.router.navigate(['/admin']);
  //   });


  this.authService.login(email,password)
  .subscribe((res) =>{
      this.router.navigate([ '/client' ]); 
     this.openSnackBar("Welcom", "OK")

   },
  (err) =>{
     //do your error logic here
    //  alert("Login wasn't successful");
     this.openSnackBar("Login wasn't successful", "OK")

  });

  }

  recoverPassword() {
    this.isRecoveringPassword = true;

    this.authService.recoverPassword(
      this.loginForm.value.email
    ).subscribe({
      next: () => {
        this.isRecoveringPassword = false;
       
     this.openSnackBar("You can recover your password in your email account", "OK");

      },
      error: (error: { message: any; }) => {
        this.isRecoveringPassword = false;
     this.openSnackBar("email not exist", "OK");
        
      }
    })
  }

  showToast() {
    this.toast.show('Hello World!')
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
function of(error: any): any {
  throw new Error('Function not implemented.');
}

