import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  name: string;
  password: string;
  constructor(private dialogRef: MatDialogRef<AuthorizationComponent>) { }

  ngOnInit(): void {
  }
  enter(): void {
    console.log('here');
    this.dialogRef.close();
  }
}
