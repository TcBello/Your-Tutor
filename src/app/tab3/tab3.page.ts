import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  messages: any[] = [
    {
      "name": "Sum Ting Wong",
      "lastMessage": "Let's start after lunch",
      "timestamp": "1hr ago",
      "image": "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
    },
    {
      "name": "Dum Fuk",
      "lastMessage": "we good",
      "timestamp": "3hrs ago",
      "image": "https://media.istockphoto.com/photos/toothless-man-got-idea-picture-id1127625196?k=20&m=1127625196&s=612x612&w=0&h=lb_2fxhheQmIiLV_wOYj4De6onORLp1oA8g5WwcQYR0=",
    }
  ]

}
