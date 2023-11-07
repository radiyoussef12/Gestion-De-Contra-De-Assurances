import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { DataService } from 'src/app/shared/service/data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddContra } from 'src/app/shared/model/add-contra';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viecontra',
  templateUrl: './viecontra.component.html',
  styleUrls: ['./viecontra.component.css']
})

export class ViecontraComponent implements OnInit {
  playerName: any;

  ngOnInit(): void {
    
   this.getAllContra()
   
    
  }
  testVariableN !:string;
  testVariableP !:string;

  testVariableID !:string;

  ContraArr : AddContra[] = [];

displayedColumns: string[] = ['idC', 'idA', 'prenom', 'nom', 'valeur','Branche','validiteDeubt','validiteFine'];
  dataSource!: MatTableDataSource<AddContra>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

constructor(   private dataApi : DataService,  private _snackBar : MatSnackBar){


}

onSubmit(event: any) {
  // console.log( event.target.player.value);
// alert(event.target.player.value);


  this.testVariableN= event.target.nom.value;
  this.testVariableP= event.target.prenom.value;

  this.testVariableID= event.target.idC.value;



  this.getAllContra();
  // return event.target.player.value;

}





  getAllContra(){
    this.dataApi.  getContra(this.testVariableID,this.testVariableN,this.testVariableP).subscribe(res => {
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

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
}
