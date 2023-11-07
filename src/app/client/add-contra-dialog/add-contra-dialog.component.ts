import { OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { Component } from '@angular/core';

// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contra-dialog',
  templateUrl: './add-contra-dialog.component.html',
  styleUrls: ['./add-contra-dialog.component.css']
})
export class AddContraDialogComponent implements OnInit {
  
 form !: FormGroup;
 
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
  private dialogRef : MatDialogRef<AddContraDialogComponent>
 ){

 
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

 this.form=this.fb.group({
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
get nomc() {
  return this.form.get('nom');
}

cancelRegistration(){

  this.dialogRef.close();


}


registerContra(){
//   if(this.form.valid){
//     alert('forms not valid');
 
// }
// else{
//   this.dialogRef.close(this.form.value);
// }
  
this.dialogRef.close(this.form.value);

}

}
function get(arg0: string) {
  throw new Error('Function not implemented.');
}

