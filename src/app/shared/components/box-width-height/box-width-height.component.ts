import { Component } from '@angular/core';

@Component({
  selector: 'app-box-width-height',
  templateUrl: './box-width-height.component.html',
  styleUrls: ['./box-width-height.component.scss'],
})
export class BoxWidthHeightComponent {
  widthHeight = {
    radioValue: true,
    bothSizes: 50,
    height: 50,
    width: 50,
    getClasses: () => {
      return this.widthHeight.radioValue
        ? 'wh-' + this.widthHeight.bothSizes
        : 'w-' + this.widthHeight.width + ' ' + 'h-' + this.widthHeight.height;
    },
  };
}
