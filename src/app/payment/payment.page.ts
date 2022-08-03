import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(private navController: NavController) { }

  paymentMethods: any[] = [
    {
      'image': "https://logos-world.net/wp-content/uploads/2020/04/Visa-Emblem.jpg",
      'cred': "9132"
    },
    {
      'image': "https://cdn2.downdetector.com/static/uploads/logo/Smart_Communications_1.png",
      'cred': "+639201234567"
    }
  ];

  goBack(){
    this.navController.pop();
  }

  ngOnInit() {
  }

}
