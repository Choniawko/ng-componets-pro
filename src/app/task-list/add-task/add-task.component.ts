import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  host: {
  class: 'add-task'
},
encapsulation: ViewEncapsulation.None
})
export class AddTaskComponent implements OnInit {

  @Output() addedTask: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  addTask(taskTitle: HTMLInputElement): void {
    this.addedTask.next(taskTitle.value);
    taskTitle.value = '';
    taskTitle.focus();
  }

}
