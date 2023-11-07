import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detele',
  templateUrl: './detele.component.html',
  styleUrls: ['./detele.component.css']
})
export class DeteleComponent  implements OnInit {
  contraName !: string;
  title !: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) data : any,
    private dialogRef : MatDialogRef<DeteleComponent>
  ) {
      this.contraName = data.contraName;
      this.title = data.title;
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  delete() {
    const deleteDoctor = true;
    this.dialogRef.close(deleteDoctor);
  }
}