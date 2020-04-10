import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  name: string;
  surname: string;
  username: string;
  password: string;
  passwordConfirmation: string;
  constructor(private dialogRef: MatDialogRef<RegistrationComponent>) { }

  ngOnInit(): void {
  }
  register(): void {
    this.dialogRef.close();
  }

}
