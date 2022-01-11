import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images=['../../assets/images/image1',
  '../../assets/images/image2',
  '../../assets/images/image3',
  '../../assets/images/image4'];
}
