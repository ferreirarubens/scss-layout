import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-flex',
  templateUrl: './box-flex.component.html',
  styleUrls: ['./box-flex.component.scss'],
})
export class BoxFlexComponent implements OnInit {
  directions = ['fx-row', 'fx-col'];

  aligns = ['start', 'center', 'end', 'around', 'between', 'evenly'];

  perpendicular = ['start', 'center', 'end', 'stretch'];

  config = {
    direction: 'fx-row',
    align: 'start',
    perpendicular: 'start',
    gap: 0
  };

  constructor() {}

  ngOnInit(): void {}

  getClasses() {
    return (`${this.config.direction} fx-${this.config.align}-${this.config.perpendicular}${(this.config.gap === 0) ? '' : (' fx-gap-' + this.config.gap)}`);
  }
}
