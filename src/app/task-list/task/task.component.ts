import { Component, OnInit, Input, HostBinding, ViewEncapsulation } from '@angular/core';
import { ITask } from './task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  host: { class: 'task'},
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent implements OnInit {

  @Input() task: ITask;
  constructor() { }

  ngOnInit() {
  }

}
