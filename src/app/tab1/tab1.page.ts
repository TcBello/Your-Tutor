import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopupPage } from '../popup/popup.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalController: ModalController) {}

  async showPopup(){
    let popup = await this.modalController.create({
      component: PopupPage,
      cssClass: 'popup'
    });
    return await popup.present();
  }

  recommendations: any[] = [
    {
      "name": "Sum Ting Wong",
      "avatar": "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
      "coverPhoto": "https://www.bolton.ac.uk/assets/Uploads/math-1500720-1280.jpg",
      "genres": ["Math", "Online Session"]
    },
    {
      "name": "Dum Fuk",
      "avatar": "https://media.istockphoto.com/photos/toothless-man-got-idea-picture-id1127625196?k=20&m=1127625196&s=612x612&w=0&h=lb_2fxhheQmIiLV_wOYj4De6onORLp1oA8g5WwcQYR0=",
      "coverPhoto": "https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg",
      "genres": ["Science", "Offline Session"]
    },
    {
      "name": "Sum Ting Wong",
      "avatar": "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
      "coverPhoto": "https://www.bolton.ac.uk/assets/Uploads/math-1500720-1280.jpg",
      "genres": ["Math", "Online Session"]
    },
    {
      "name": "Dum Fuk",
      "avatar": "https://media.istockphoto.com/photos/toothless-man-got-idea-picture-id1127625196?k=20&m=1127625196&s=612x612&w=0&h=lb_2fxhheQmIiLV_wOYj4De6onORLp1oA8g5WwcQYR0=",
      "coverPhoto": "https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg",
      "genres": ["Science", "Offline Session"]
    },
    {
      "name": "Sum Ting Wong",
      "avatar": "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
      "coverPhoto": "https://www.bolton.ac.uk/assets/Uploads/math-1500720-1280.jpg",
      "genres": ["Math", "Online Session"]
    },
  ];

  onlineSessions: any[] = [
    {
      "name": "Sum Ting Wong",
      "avatar": "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
      "coverPhoto": "https://www.bolton.ac.uk/assets/Uploads/math-1500720-1280.jpg",
      "genres": ["Math", "Online Session"]
    },
    {
      "name": "Dum Fuk",
      "avatar": "https://media.istockphoto.com/photos/toothless-man-got-idea-picture-id1127625196?k=20&m=1127625196&s=612x612&w=0&h=lb_2fxhheQmIiLV_wOYj4De6onORLp1oA8g5WwcQYR0=",
      "coverPhoto": "https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg",
      "genres": ["Science", "Online Session"]
    },
    {
      "name": "Sum Ting Wong",
      "avatar": "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
      "coverPhoto": "https://www.bolton.ac.uk/assets/Uploads/math-1500720-1280.jpg",
      "genres": ["Math", "Online Session"]
    },
    {
      "name": "Dum Fuk",
      "avatar": "https://media.istockphoto.com/photos/toothless-man-got-idea-picture-id1127625196?k=20&m=1127625196&s=612x612&w=0&h=lb_2fxhheQmIiLV_wOYj4De6onORLp1oA8g5WwcQYR0=",
      "coverPhoto": "https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg",
      "genres": ["Science", "Online Session"]
    },
    {
      "name": "Sum Ting Wong",
      "avatar": "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
      "coverPhoto": "https://www.bolton.ac.uk/assets/Uploads/math-1500720-1280.jpg",
      "genres": ["Math", "Online Session"]
    },
  ];

  offlineSessions: any[] = [
    {
      "name": "Sum Ting Wong",
      "avatar": "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
      "coverPhoto": "https://www.bolton.ac.uk/assets/Uploads/math-1500720-1280.jpg",
      "genres": ["Math", "Offline Session"]
    },
    {
      "name": "Dum Fuk",
      "avatar": "https://media.istockphoto.com/photos/toothless-man-got-idea-picture-id1127625196?k=20&m=1127625196&s=612x612&w=0&h=lb_2fxhheQmIiLV_wOYj4De6onORLp1oA8g5WwcQYR0=",
      "coverPhoto": "https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg",
      "genres": ["Science", "Offline Session"]
    },
    {
      "name": "Sum Ting Wong",
      "avatar": "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
      "coverPhoto": "https://www.bolton.ac.uk/assets/Uploads/math-1500720-1280.jpg",
      "genres": ["Math", "Offline Session"]
    },
    {
      "name": "Dum Fuk",
      "avatar": "https://media.istockphoto.com/photos/toothless-man-got-idea-picture-id1127625196?k=20&m=1127625196&s=612x612&w=0&h=lb_2fxhheQmIiLV_wOYj4De6onORLp1oA8g5WwcQYR0=",
      "coverPhoto": "https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg",
      "genres": ["Science", "Offline Session"]
    },
    {
      "name": "Sum Ting Wong",
      "avatar": "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
      "coverPhoto": "https://www.bolton.ac.uk/assets/Uploads/math-1500720-1280.jpg",
      "genres": ["Math", "Offline Session"]
    },
  ];

  mathTutors: any[] = [
    {
      "name": "Sum Ting Wong",
      "avatar": "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
      "coverPhoto": "https://www.bolton.ac.uk/assets/Uploads/math-1500720-1280.jpg",
      "genres": ["Math", "Online Session"]
    },
    {
      "name": "Dum Fuk",
      "avatar": "https://media.istockphoto.com/photos/toothless-man-got-idea-picture-id1127625196?k=20&m=1127625196&s=612x612&w=0&h=lb_2fxhheQmIiLV_wOYj4De6onORLp1oA8g5WwcQYR0=",
      "coverPhoto": "https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg",
      "genres": ["Math", "Offline Session"]
    },
    {
      "name": "Sum Ting Wong",
      "avatar": "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
      "coverPhoto": "https://www.bolton.ac.uk/assets/Uploads/math-1500720-1280.jpg",
      "genres": ["Math", "Online Session"]
    },
    {
      "name": "Dum Fuk",
      "avatar": "https://media.istockphoto.com/photos/toothless-man-got-idea-picture-id1127625196?k=20&m=1127625196&s=612x612&w=0&h=lb_2fxhheQmIiLV_wOYj4De6onORLp1oA8g5WwcQYR0=",
      "coverPhoto": "https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg",
      "genres": ["Math", "Online Session"]
    },
    {
      "name": "Sum Ting Wong",
      "avatar": "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
      "coverPhoto": "https://www.bolton.ac.uk/assets/Uploads/math-1500720-1280.jpg",
      "genres": ["Math", "Online Session"]
    },
  ];

  scienceTutors: any[] = [
    {
      "name": "Sum Ting Wong",
      "avatar": "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
      "coverPhoto": "https://www.bolton.ac.uk/assets/Uploads/math-1500720-1280.jpg",
      "genres": ["Science", "Online Session"]
    },
    {
      "name": "Dum Fuk",
      "avatar": "https://media.istockphoto.com/photos/toothless-man-got-idea-picture-id1127625196?k=20&m=1127625196&s=612x612&w=0&h=lb_2fxhheQmIiLV_wOYj4De6onORLp1oA8g5WwcQYR0=",
      "coverPhoto": "https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg",
      "genres": ["Science", "Offline Session"]
    },
    {
      "name": "Sum Ting Wong",
      "avatar": "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
      "coverPhoto": "https://www.bolton.ac.uk/assets/Uploads/math-1500720-1280.jpg",
      "genres": ["Science", "Online Session"]
    },
    {
      "name": "Dum Fuk",
      "avatar": "https://media.istockphoto.com/photos/toothless-man-got-idea-picture-id1127625196?k=20&m=1127625196&s=612x612&w=0&h=lb_2fxhheQmIiLV_wOYj4De6onORLp1oA8g5WwcQYR0=",
      "coverPhoto": "https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg",
      "genres": ["Science", "Online Session"]
    },
    {
      "name": "Sum Ting Wong",
      "avatar": "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
      "coverPhoto": "https://www.bolton.ac.uk/assets/Uploads/math-1500720-1280.jpg",
      "genres": ["Science", "Online Session"]
    },
  ];

}