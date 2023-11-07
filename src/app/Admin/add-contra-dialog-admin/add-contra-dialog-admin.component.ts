import { OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-contra-dialog-admin',
  templateUrl: './add-contra-dialog-admin.component.html',
  styleUrls: ['./add-contra-dialog-admin.component.css']
})
export class AddContraDialogAdminComponent implements OnInit {
  
  formA !: FormGroup;
  title!:string;
 
  prenom!:string ;
  nom!:string;
  validite!:number;
  validiteDeubt!:string;
  validiteFine!:string;
  Branche!:string;
  valeur!:number;
  Agent!:string;
  prenomAgent!:string;
  test!:Boolean;
  id!:string;
  

  idA!:string;
  idC!:string;
  constructor(
   private fb :FormBuilder,
   @Inject(MAT_DIALOG_DATA) data : any,
   private dialogRef : MatDialogRef<AddContraDialogAdminComponent>
  ){
 
   this.title=data.title;
 
   this.prenom=data.prenom;
  this.nom=data.nom;
  this.validite=data.validite;
  this.valeur=data.valeur;
  this.Agent=data.Agent;
  this.prenomAgent=data.prenomAgent;
  this.validiteFine=data.validiteFine;
  this.validiteDeubt=data.validiteDeubt;
  this.test=data.test;
  this.Branche=data.Branche;
this.idA=data.idA;
this.idC=data.idC;

  }
  ngOnInit(): void {
 
  this.formA=this.fb.group({
   idC:[this.idC,[]],
   idA:[this.idA,[]],
 
   prenom:[this.prenom,[Validators.required]],
   nom:[this.nom,[Validators.required]],
   validite:[this.validite,Validators.required],
   valeur:[this.valeur,[Validators.required]],
   Branche:[this.Branche,[Validators.required]],
   Agent:[this.Agent,[Validators.required]],
   validiteDeubt:[this.validiteDeubt,[Validators.required]],
   validiteFine:[this.validiteFine,[Validators.required]],
  test:[this.test,[Validators.required]],

  
  })
 }
 
  
 cancelRegistrationA(){
   this.dialogRef.close();
 }
 
 
//  cal(){

//        this.Agent='hh'; 
//  }
 registerContraA(){
 //   if(this.form.valid){
 //     alert('forms not valid');
  
 // }
 // else{
 //   this.dialogRef.close(this.form.value);
 // }
 
   this.dialogRef.close(this.formA.value);
 
 }
}
