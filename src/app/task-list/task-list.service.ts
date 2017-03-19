import { Injectable } from '@angular/core';
import { ITask } from './task/task.interface';

@Injectable()
export class TaskListService {

  tasks: ITask[];
  constructor() {
    this.tasks = [
      {title: 'Task #1', done: false},
      {title: 'Task #2', done: false},
      {title: 'Task #3', done: true},
      {title: 'Task #4', done: false}
    ];
   }



}
