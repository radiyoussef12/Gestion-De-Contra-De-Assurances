import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, UserCredential } from '@angular/fire/auth';
import {  switchMap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { catchError, from, Observable, of, throwError } from 'rxjs';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser$ = authState(this.auth);
  constructor(private auth :Auth, private auth1: AngularFireAuth) { }

 
  login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password));

    
  }
  logout(): Observable<any> {
    return from(this.auth.signOut());
  }
  
  signUp(name :string,email: string, password: string)  {
   
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap (({user})=> updateProfile(user,{displayName : name}) ));
    
}
recoverPassword(email: string): Observable<void> {
  return from(this.auth1.sendPasswordResetEmail(email));
}


}