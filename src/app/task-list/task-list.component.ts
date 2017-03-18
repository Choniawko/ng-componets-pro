import { Component, OnInit } from '@angular/core';
import { ITask } from './task/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: ITask[];

  constructor() { }

  ngOnInit() {
    this.tasks = [
      {title: 'Task #1', done: false},
      {title: 'Task #2', done: false}
    ];
  }

  addTask(title: string): void {
    this.tasks.push({
      title,
      done: false
    });
  }

}
