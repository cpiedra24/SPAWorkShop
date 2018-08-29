import { Component, OnInit } from '@angular/core';
import { Task } from '../models/taskModel';
import { TaskService } from '../service/task.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public task: Task;
  constructor(private TaskService: TaskService) {

    this.task = new Task();
   }
  ngOnInit() {
  }

  registerTask(){
    this.TaskService.registrar(this.task).subscribe(
      res=> {
        alert("Registrado");
      }
    );

  }
}
