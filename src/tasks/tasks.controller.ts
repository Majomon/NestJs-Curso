import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TaskController {
  // Constructor -> Función que se ejecuta apenas la clase esta instanciada
  constructor(private tasksService: TasksService) {}
  // Decorador
  @Get()
  getAllTask(@Query() query: any) {
    console.log(query);
    
    return this.tasksService.getTasks();
  }

  @Post()
  createTask(@Body() task: any) {
    return this.tasksService.createTask(task);
  }

  @Put()
  updateTask() {
    return this.tasksService.updateTask();
  }

  @Delete()
  deleteTask() {
    return this.tasksService.deleteTask();
  }

  @Patch()
  updateTaskStatus() {
    return this.tasksService.updateTaskStatus();
  }
}
