import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) {
  }

  ngOnInit() {

  }

  @Input()
  notification : string;

  showNotification(message : string){
    if((message != undefined || message != null) && message.length>0){
      setTimeout(() => this.snackBar.open(message,"",{
        duration: 1500
      }));
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.showNotification(changes.notification.currentValue);
  }
}

@Component({
  selector: 'snack-notification',
  templateUrl: './snack-notification.html',
  styleUrls: ['./notifications.component.css']
})
export class SnackComponent{

}