import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  constructor(private navController: NavController) { }

  notifications: any[] = [
    {
      "avatar": "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
      "title": "Sum Ting Wong",
      "caption": "Requested to be your tutor",
      "timeStamp": "5 mins ago",
      "isRead": false
    },
    {
      "avatar": "https://media.istockphoto.com/photos/toothless-man-got-idea-picture-id1127625196?k=20&m=1127625196&s=612x612&w=0&h=lb_2fxhheQmIiLV_wOYj4De6onORLp1oA8g5WwcQYR0=",
      "title": "Dum Fuk",
      "caption": "Requested to be your tutor",
      "timeStamp": "15 mins ago",
      "isRead": true
    }
  ];

  goBack(){
    this.navController.pop();
  }

  ngOnInit() {
  }

}
