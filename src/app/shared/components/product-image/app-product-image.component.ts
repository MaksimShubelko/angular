import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-product-image',
    templateUrl: 'app-product-image.component.html',
    styleUrls: ['app-product-image.component.scss',
        '../../../home-page/pages/home-page/home.component.scss']
})
export class AppProductImageComponent {
    defaultImageUrl: string = 'assets/images/default-image.png';
    @Input() imageUrl: string;

    onImageLoadError() {
        this.imageUrl = this.defaultImageUrl;
    }
}
