import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  role: string;
  constructor(private route: ActivatedRoute) {
    this.role = this.route.snapshot.paramMap.get('role');
  }

  ngOnInit() {
  }

}
