import { Component } from '@angular/core';
import { Task } from './models/taskModel';
import { TaskService } from './service/task.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SPAWhorkShop';

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
