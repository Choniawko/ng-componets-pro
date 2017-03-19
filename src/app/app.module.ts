import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task-list/task/task.component';
import { AddTaskComponent } from './task-list/add-task/add-task.component';
import { UiModule } from './ui/ui.module';
import { TaskListService } from './task-list/task-list.service';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    AddTaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UiModule
  ],
  providers: [TaskListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
