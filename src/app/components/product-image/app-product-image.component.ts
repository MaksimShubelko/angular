import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-image',
  templateUrl: 'app-product-image.component.html',
  styleUrls: ['app-product-image.component.scss',
    '../../pages/home-page/home-page.component.scss']
})
export class AppProductImageComponent implements OnInit {
  defaultImageUrl: string = "assets/images/default-image.png"
  @Input() imageUrl: string

  constructor() {
  }

  ngOnInit(): void {

  }

  onImageLoadError() {
    this.imageUrl = this.defaultImageUrl;
  }
}
