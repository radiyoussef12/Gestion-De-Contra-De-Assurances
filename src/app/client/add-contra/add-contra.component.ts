import { Component, OnInit } from '@angular/core';

import { AddContraDialogComponent } from '../add-contra-dialog/add-contra-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { DataService } from 'src/app/shared/service/data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddContra } from 'src/app/shared/model/add-contra';



import { MatTableDataSource } from '@angular/material/table';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Agent } from 'src/app/shared/model/agent';
@Component({
  selector: 'app-add-contra',
  templateUrl: './add-contra.component.html',
  styleUrls: ['./add-contra.component.css']
})
export class AddContraComponent implements OnInit{
 
  ngOnInit(): void {
    this.getAllContra();
    // this.getAllContra('testValue');
    this.getAgent();
    
  }
 

ContraArr : AddContra[] = [];
items: any[] = [];

// displayedColumns: string[] = ['idC', 'Branche','validiteDeubt','validiteFine', 'valeur', 'idA','Agent','nom','prenom'];
displayedColumns: string[] = ['idC', 'Branche','validiteDeubt','validiteFine', 'valeur', 'idA','Agent','nom','prenom'];


  dataSource!: MatTableDataSource<AddContra>;
  tabel!: MatTableDataSource<Agent>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

constructor(  public dialog : MatDialog, private dataApi : DataService,  private _snackBar : MatSnackBar, private db: AngularFirestore){}


add_contra(){

  const dialogConfig =new  MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.data = {
    title : 'Information de votr contra',
    // buttonName : 'Register'
  }
  dialogConfig.data.Agent=this.items[0].nomA+' '+this.items[0].prenomA;
  dialogConfig.data.idA=this.items[0].idA;
  dialogConfig.data.idC=this.items[0].idA+'-'+Math.floor(Math.random()*10)+'-'+Math.floor(Math.random()*1000);


  const dialogRef = this.dialog.open(AddContraDialogComponent, dialogConfig);


  dialogRef.afterClosed().subscribe(data=>{
    data.test=false;
    data.Agent=this.items[0].nomA+' '+this.items[0].prenomA;
    data.idA=this.items[0].idA;

    if(data.Branche=="1"){
      data.Branche='Life';
            data.valeur=data.validite*500;
          
  this.dataApi.addlife();
}
          if(data.Branche=="2"){
          
            data.valeur=data.validite*1000;
            data.Branche='Hail';
   this.dataApi.addhail();

      
          }
          if(data.Branche=="3"){
      
            data.valeur=data.validite*1500;
            data.Branche='Storm';
        data.Branche='Storm';
          
          }
          if(data.Branche=="4"){
      
            data.valeur=data.validite*2000;
            data.Branche='Fire';
        data.Branche='Fire';

          
          }
    var myDate = new Date();

  
   
    data.idC = data.idA +'-'+Math.floor(Math.random()*10)+'-'+Math.floor(Math.random()*1000);
    var m=myDate.getMonth()+1;

    var d=myDate.getDay()+16;

    data.validiteDeubt= myDate.getFullYear()+'/'+m+'/'+d;
  
    var s= Number(data.validite)+1;

    var date =new Date(new Date().setMonth(new Date().getMonth() +s));
    data.validiteFine=date.getFullYear()+'/'+date.getMonth()+'/'+d;
    
    if(data ){
      // console.log("Information de votr contra",data);
      // alert(data.nom);


      // private dataApi : DataService,
      
     this.dataApi. addcontra(data);
     this.openSnackBar("adds contract is successfully", "OK")
   
   
    //  alert("votre ID est :"+data.idC);

     
    }
  

  })

    }



    getAllContra(){
      this.dataApi.getAllContra().subscribe(res => {
        this.ContraArr = res.map((e : any) => {
          const data = e.payload.doc.data();

          data.id = e.payload.doc.id;
          return data;
        })
        this.dataSource = new MatTableDataSource(this.ContraArr);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    })
  
  }

  getAgent(){
    
    this.db.collection('Agent/').valueChanges().subscribe((data) => {
      this.items = data;
    
    });
}


    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action);
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

}
