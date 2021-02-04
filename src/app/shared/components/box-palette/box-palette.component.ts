import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-palette',
  templateUrl: './box-palette.component.html',
  styleUrls: ['./box-palette.component.scss'],
})
export class BoxPaletteComponent implements OnInit {
  fullPalettes = [
    'red',
    'pink',
    'purple',
    'deep-purple',
    'indigo',
    'blue',
    'light-blue',
    'cyan',
    'teal',
    'green',
    'light-green',
    'lime',
    'yellow',
    'amber',
    'orange',
    'deep-orange',
  ];

  basicPalettes = ['brown', 'grey', 'blue-grey'];

  basicHues = [
    '',
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ];
  monoPalettes = ['black', 'white'];
  monoHues = ['', '700'];

  extraHues = ['A100', 'A200', 'A400', 'A700'];

  fullHues = this.basicHues.concat(this.extraHues);

  constructor() {}

  ngOnInit(): void {}

  getClasses(palette, hue) {
    return `mat-color-${palette}${hue ? '-' : ''}${hue}`;
  }
}
