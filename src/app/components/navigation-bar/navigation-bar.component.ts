import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {AuthorizationComponent} from '../authorization/authorization.component';
import {RegistrationComponent} from '../registration/registration.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  login(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '400px';
    dialogConfig.width = '550px';
    dialogConfig.backdropClass = 'dark-backdrop';
    const modalDialog = this.matDialog.open(AuthorizationComponent, dialogConfig);
  }

  register(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '600px';
    dialogConfig.width = '550px';
    dialogConfig.backdropClass = 'dark-backdrop';
    const modalDialog = this.matDialog.open(RegistrationComponent, dialogConfig);
  }
}
