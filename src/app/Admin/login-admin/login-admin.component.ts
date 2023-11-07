
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit{

  isLoggingIn = false;
  isRecoveringPassword = false;

  // private db: AngularFirestore
 constructor(private authService: AuthenticationService,
  private router: Router,
  private _snackBar : MatSnackBar ,
  private db: AngularFirestore) {


  }
  ngOnInit(): void {

    // throw new Error('Method not implemented.');
  }
  loginFormA = new FormGroup({
   
    email:new UntypedFormControl('', [Validators.required, Validators.email]),
    password:new UntypedFormControl(''),

  

   
  });
  get email() {
    
    return this.loginFormA.get('email');
  }
  
 

  get password() {
    return this.loginFormA.get('password');
  }
  submitA(){
   
    if(!this.loginFormA.valid){
     
      return;
    }
    

    const { email ,password}=this.loginFormA.value;
  

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
  .subscribe(() =>{
 

      this.router.navigate([ '/client' ]); 

      // this.db
      // .collection('Agent')
      // .doc('/' + 'uuuuuuuuugvt')
      // .update({name:'radi'})
      // .then(() => {
      //   console.log('done');
      // })
     this.openSnackBar("Welcom", "OK")

   },
  () =>{
     //do your error logic here
    //  alert("Login wasn't successful");
     this.openSnackBar("Login wasn't successful", "OK");

  });

  }

  recoverPassword() {
    this.isRecoveringPassword = true;

    this.authService.recoverPassword(
      this.loginFormA.value.email
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


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }


}
