import { OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agent-dialog',
  templateUrl: './agent-dialog.component.html',
  styleUrls: ['./agent-dialog.component.css']
})
export class AgentDialogComponent  implements OnInit {
  
  formAgent !: FormGroup;
  title!:string;
 
  prenomA!:string ;
  nomA!:string;
  
  constructor(
   private fb :FormBuilder,
   @Inject(MAT_DIALOG_DATA) data : any,
   private dialogRef : MatDialogRef<AgentDialogComponent>
  ){
 
   this.title=data.title;
 
   this.prenomA=data.prenomA;
  this.nomA=data.nomA;
 
 
  }
  ngOnInit(): void {
 
  this.formAgent=this.fb.group({

   idA:['',[]],
 
   prenomA:[ this.prenomA,[Validators.required]],
   nomA:[ this.nomA,[Validators.required]],
   
 
 
  })
 }
 
  
 cancelRegistrationAgent(){
   this.dialogRef.close();
 }
 
 
 registerContraAgent(){
   this.dialogRef.close(this.formAgent.value);
 
 }
}
