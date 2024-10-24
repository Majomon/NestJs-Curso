import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller({})
export class TaskController {
  // Constructor -> Función que se ejecuta apenas la clase esta instanciada
  constructor(private tasksService: TasksService) {}
  // Decorador
  @Get('/tasks')
  getAllTasks() {
    return this.tasksService.getTasks();
  }
}
