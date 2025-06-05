import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './task.service'; // Correct service name
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {} // Use TasksService

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.taskService.findOne(Number(id)); // Matches service method name
  }

  @Get('/')
  getAllTasks() {
    return this.taskService.findAll(); // Add this to expose findAll
  }

  // @Post('/')
  // Create(@Body() taskData: Partial<Task>) {
  //   return this.taskService.create(taskData); // Matches service method name
  // }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Patch('/:id')
  updateTask(@Body() body: any, @Param('id') id: string) {
    return this.taskService.update(Number(id), body); // Matches service method name
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.remove(Number(id)); // Matches service method name
  }

  @Delete('/clear-all')
  clearAllTasks() {
    return this.taskService.removeAll();
  }

}
