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
import { DilogtestComponent } from '../dilogtest/dilogtest.component';
import { DeteleComponent } from '../detele/detele.component';
@Component({
  selector: 'app-getcontra',
  templateUrl: './getcontra.component.html',
  styleUrls: ['./getcontra.component.css']
})
export class GetcontraComponent {

  myData: Observable<any[]> | undefined;
  ContraArr : AddContraAdmin[] = [];
  Agent : Agent[] = [];
  items: any[] = [];

  ngOnInit(): void {
    this.getContraA();
   

    
  }
  displayedColumns: string[] = ['idC', 'Branche','validiteDeubt','validiteFine', 'valeur', 'idA','Agent','nom','prenom','action'];
    dataSource!: MatTableDataSource<AddContraAdmin>;

    tabel!: MatTableDataSource<AddContraAdmin>;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  
  constructor(  public dialog : MatDialog, private dataApi : DataService,  private _snackBar : MatSnackBar, private db: AngularFirestore){
    
}

getContraA(){
  this.dataApi.getContraA().subscribe(res => {
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

    
    acsepte(row :any){

 if(row.id == null) {
    return;
  }


row.test=true;
this.dataApi. acsepte(row);
//  alert(this.dataApi.getAgent());
 this.openSnackBar("Contra is accepted", "OK");

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
    
}