import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dailog',
  templateUrl: './delete-dailog.component.html',
  styleUrls: ['./delete-dailog.component.scss']
})
export class DeleteDailogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteDailogComponent>
  ) { }

  ngOnInit(): void {
  }

  onClose(){
    this.dialogRef.close()
  }

}
