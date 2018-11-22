import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  @Input()
  notification : string;

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
    
  }

  showNotification(){
    this.snackBar.openFromComponent(SnackComponent, {
      duration: 500
    });
  }
}

@Component({
  selector: 'snack-notification',
  templateUrl: './snack-notification.html',
  styleUrls: ['./notifications.component.css']
})
export class SnackComponent extends NotificationsComponent{
  @Input()
  notification : string;
}