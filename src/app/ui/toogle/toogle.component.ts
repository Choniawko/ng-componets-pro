import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-toggle',
  templateUrl: './toogle.component.html',
  styleUrls: ['./toogle.component.css'],
  host: {
    class: 'toggle'
  }
})
export class ToogleComponent implements OnInit {

  @Input() buttonList;
  @Input() selectedButton;
  @Output() selectedButtonChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    if (this.selectedButton === undefined) {
      this.selectedButton = this.buttonList[0];
    }
  }
  onButtonActivate(button) {
    this.selectedButton = button;
    this.selectedButtonChange.next(button);
  }

}
