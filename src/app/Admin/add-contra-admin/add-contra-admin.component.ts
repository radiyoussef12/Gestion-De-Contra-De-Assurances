import { Component, OnInit } from '@angular/core';

import { AddContraDialogAdminComponent } from '../add-contra-dialog-admin/add-contra-dialog-admin.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { DataService } from 'src/app/shared/service/data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddContra } from 'src/app/shared/model/add-contra';

import { AngularFirestore } from '@angular/fire/compat/firestore';


import { MatTableDataSource } from '@angular/material/table';
import { AgentDialogComponent } from '../agent-dialog/agent-dialog.component';
import { trigger } from '@angular/animations';
import { AddContraAdmin } from 'src/app/shared/model/add-contra-admin';
import { Agent } from 'src/app/shared/model/agent';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { DeteleComponent } from '../detele/detele.component';
import { DilogtestComponent } from '../dilogtest/dilogtest.component';
@Component({
  selector: 'app-add-contra-admin',
  templateUrl: './add-contra-admin.component.html',
  styleUrls: ['./add-contra-admin.component.css']
})
export class AddContraAdminComponent implements OnInit{
  p: any;
  Ag: Observable<any[]> | undefined;
  ngOnInit(): void {
    this.getAllContraAdmin();
    this.getAgent();

    
  }
  myData: Observable<any[]> | undefined;
  ContraArr : AddContraAdmin[] = [];
  Agent : Agent[] = [];
  items: any[] = [];




  displayedColumns: string[] = ['idC', 'Branche','validiteDeubt','validiteFine', 'valeur', 'idA','Agent','nom','prenom','action'];

    dataSource!: MatTableDataSource<AddContraAdmin>;

    tabel!: MatTableDataSource<Agent>;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  
  constructor(  public dialog : MatDialog, private dataApi : DataService,  private _snackBar : MatSnackBar, private db: AngularFirestore){
    

    
  }
  
  
  add_contraAmdin(){
  
    const dialogConfig =new  MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title : 'Information de votr contra',
     
    }
   
    dialogConfig.data.Agent=this.items[0].nomA+' '+this.items[0].prenomA;
    dialogConfig.data.idA=this.items[0].idA;
    dialogConfig.data.idC=this.items[0].idA+'-'+Math.floor(Math.random()*10)+'-'+Math.floor(Math.random()*1000);



    const dialogRef = this.dialog.open(AddContraDialogAdminComponent, dialogConfig);
   
    dialogRef.afterClosed().subscribe(data=>{
    
    data.test=true;
  
  // collection("Agent/" ).stateChanges();
 
    data.Agent=this.items[0].nomA+' '+this.items[0].prenomA;
   data.idA=this.items[0].idA;

      if(data.Branche=="1"){
  data.Branche='Life';
        data.valeur=data.validite*500;
  this.dataApi.addlife();
      
      }
      if(data.Branche=="2"){
        data.Branche='Hail';
   this.dataApi.addhail();
    
        data.valeur=data.validite*1000;
      
      }
      if(data.Branche=="3"){
        data.Branche='Storm';
  this.dataApi.addstrom();
        data.valeur=data.validite*1500;
      
      }
      if(data.Branche=="4"){
        data.Branche='Fire';
        this.dataApi.addfire();
  
        data.valeur=data.validite*2000;
      
      }
      var myDate = new Date();
    
      data.idC =this.items[0].idA+'-'+Math.floor(Math.random()*10)+'-'+Math.floor(Math.random()*1000);
      var m=myDate.getMonth()+1;
  
      var d=myDate.getDay()+9;
  
      data.validiteDeubt= myDate.getFullYear()+'/'+m+'/'+d;
    
      var s= Number(data.validite)+1;
  
      var date =new Date(new Date().setMonth(new Date().getMonth() +s));
      data.validiteFine=date.getFullYear()+'/'+date.getMonth()+'/'+d;
      
      if(data){
        // console.log("Information de votr contra",data);
        // alert(data.nom);
  
  
        // private dataApi : DataService,
       
       this.dataApi. addcontraAdmin(data);
      //  alert(this.dataApi.getAgent());
       this.openSnackBar(" contract is Added  successfull", "OK");
       var n =9;
      //  this.dataApi.addN(data.idA);
     
      }
    
  
    })



















      }
  
  





      getAllContraAdmin(){
        this.dataApi.getAllContraAmdin().subscribe(res => {
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

    


  editContra(row :any){
    if(row.id == null) {
      return;
    }
    const dialogConfig =new  MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data =row;
    // dialogConfig.data.title = "Edit Contra";
  
    const dialogRef = this.dialog.open(DilogtestComponent, dialogConfig);
  
   
    dialogRef.afterClosed().subscribe(data=>{
    
  
      if(data){
      
       this.dataApi. updateContra(data);
    
       this.openSnackBar("Contra is updated successfull", "OK");
     
     
      }
    
  
    })
      }
  
      
    
  
      deleteContra(row :any){
        if(row.id == null) {
          return;
        }
        const dialogConfig =new  MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
          title : 'Delete doctor',
          contraName : row.nom
        }
        const dialogRef = this.dialog.open(DeteleComponent, dialogConfig);
      
       
        dialogRef.afterClosed().subscribe(data=>{
        
      
          if(data){
          
           this.dataApi. deleteContra(row.id);
        
           this.openSnackBar("Contra is delete successfull", "OK");
         
         
          }
        
      
        })
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
