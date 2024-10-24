import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksService } from './tasks.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/tasks')
@ApiTags('Tasks')
export class TaskController {
  // Constructor -> Función que se ejecuta apenas la clase esta instanciada
  constructor(private tasksService: TasksService) {}
  // Decorador
  @Get()
  @ApiOperation({ summary: 'Todas las tareas' })
  @ApiResponse({ status: 200, description: 'Retorna todas las tareas' })
  @ApiResponse({ status: 403, description: 'Prohibido' })
  getAllTask(@Query() query: any) {
    console.log(query);
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Tearea por ID' })
  getTask(@Param('id') id: string) {
    return this.tasksService.getTask(parseInt(id));
  }

  @Post()
  @ApiOperation({ summary: 'Crear tarea' })
  createTask(@Body() task: CreateTaskDto) {
    return this.tasksService.createTask(task);
  }

  @Put()
  @ApiOperation({ summary: 'Modificar tarea' })
  updateTask(@Body() task: UpdateTaskDto) {
    return this.tasksService.updateTask(task);
  }

  @Delete()
  @ApiOperation({ summary: 'Eliminar tarea' })
  deleteTask() {
    return this.tasksService.deleteTask();
  }

  @Patch()
  @ApiOperation({ summary: 'Modificar estado de la tarea' })
  updateTaskStatus() {
    return this.tasksService.updateTaskStatus();
  }
}
