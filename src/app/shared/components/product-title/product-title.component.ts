import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-product-title',
    templateUrl: './product-title.component.html',
    styleUrls: ['./product-title.component.scss']
})
export class ProductTitleComponent {
    @Input() productTitle: string;

}
