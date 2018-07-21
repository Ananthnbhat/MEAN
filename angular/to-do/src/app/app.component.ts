import { Component } from '@angular/core';
import { Task } from "./models/task.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  currentFocus: string = 'First App';
  currentTask: string = 'Angular practice';


  tasks: Task[] = [new Task("Finish Angular as soon as possible!.", 3),
  new Task('Begin brainstorming.', 2),
  new Task('Add README file to last few projects.', 2)
  ];
  selectedTask = null;
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  priorityColor(currentTask) {
    if (currentTask.priority === 3) {
      return "bg-danger btn";
    } else if (currentTask.priority === 2) {
      return "bg-warning btn";
    } else {
      return "bg-info btn";
    }
  }
  finishedEditing() {
    this.selectedTask = null;
  }
}
