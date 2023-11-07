import { Component, OnInit } from '@angular/core';

import { AddContraDialogAdminComponent } from '../add-contra-dialog-admin/add-contra-dialog-admin.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { DataService } from 'src/app/shared/service/data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Agent } from 'src/app/shared/model/agent';

import { AngularFirestore } from '@angular/fire/compat/firestore';


import { MatTableDataSource } from '@angular/material/table';
import { AgentDialogComponent } from '../agent-dialog/agent-dialog.component';
@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit{
  ngOnInit(): void {
  

    
    // this.getAllContra('testValue');
  
  }
  ContraArr : Agent[] = [];

  displayedColumns: string[] = ['idA', 'last', 'name'];
    dataSource!: MatTableDataSource<Agent>;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;







    constructor(  public dialog : MatDialog, private dataApi : DataService,  private _snackBar : MatSnackBar, private db: AngularFirestore){}
  



    add_contraAgent(){
  
      const dialogConfig =new  MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = {
        title : 'Information de Agent',
        // buttonName : 'Register'
      }
      const dialogRef = this.dialog.open(AgentDialogComponent, dialogConfig);
    
      dialogRef.afterClosed().subscribe(data=>{
        data.idA = 'A'+Math.floor(Math.random()*1000);






        if(data){
        
          var n= data.name;
          var p=data.last;
          var id =data.idA;

        
         this.dataApi. addAgent(data);
         this.openSnackBar("  Agent is added successfull", "OK")
       
        //  this.openSnackBar("votre ID est :"+data.idC,"ok");
        }
       
      })
        }


        openSnackBar(message: string, action: string) {
          this._snackBar.open(message, action);
        }
    









  
}
