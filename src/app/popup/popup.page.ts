import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.page.html',
  styleUrls: ['./popup.page.scss'],
})
export class PopupPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router
  ) { }

  closePopup(){
    this.modalController.dismiss();
  }

  goToMyProfile(){
    this.closePopup();
    this.router.navigateByUrl("/my-profile");
  }

  goToNotification(){
    this.closePopup();
    this.router.navigateByUrl("/notification");
  }

  goToPayment(){
    this.closePopup();
    this.router.navigateByUrl("/payment");
  }

  goToSettings(){
    this.closePopup();
    this.router.navigateByUrl("/settings");
  }

  logout(){
    this.closePopup();
    this.router.navigateByUrl("/login");
  }

  ngOnInit() {
  }

}
