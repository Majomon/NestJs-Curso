import { Injectable } from '@nestjs/common';

export interface User {
  name: string;
  age: number;
}

@Injectable()
export class TasksService {
  getTasks(): User {
    return {
      name: 'John',
      age: 30,
    };
  }

  createTask() {
    return 'Creando tarea';
  }

  updateTask() {
    return 'Actualizando tarea';
  }

  deleteTask() {
    return 'Eliminando tarea';
  }

  updateTaskStatus() {
    return 'Actualizando estado de tarea';
  }
}
