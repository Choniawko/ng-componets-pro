import { Component, OnInit } from '@angular/core';
import { ITask } from './task/task.interface';
import { TaskListService } from './task-list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: ITask[];
  taskFilterList: string[];
  selectedTaskFilter: string;

  constructor(private _taskListService: TaskListService) {
    this.tasks = this._taskListService.tasks;
    this.taskFilterList = ['wszystkie', 'otwarte', 'zamknięte'];
    this.selectedTaskFilter = 'wszystkie';
   }

  ngOnInit() { }

  get getFilteredTasks(): ITask[] {
    return this._taskListService.tasks ?
      this._taskListService.tasks.filter((task: ITask) => {
        let result: boolean;
        switch (this.selectedTaskFilter) {
          case 'otwarte':
            result = !task.done;
            break;
          case 'zamknięte':
            result = task.done;
            break;
          default:
            result = true;
        }
        return result;
      }) : [];
  }

  addTask(title: string): void {
    this._taskListService.tasks.push({
      title,
      done: false
    });
  }

}
