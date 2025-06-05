import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  tasks: any;
  taskRepository: any;
  constructor(
    @InjectRepository(Task)
    private tasksRepo: Repository<Task>,
  ) {}

  create(taskData: Partial<Task>) {
    const task = this.tasksRepo.create(taskData);
    return this.tasksRepo.save(task);
  }

  findAll() {
    return this.tasksRepo
  // findOne(id: number) {
  //   return this.tasksRepo.findOne({ where: { id }, relations: ['user'] });
  // }.find({ relations: ['user'] });
  }

// Find one task by ID
  async findOne(id: number): Promise<Task> {
    const task = await this.tasksRepo.findOne({ where: { id }, relations: ['user'] });
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  async update(id: number, updateData: Partial<Task>) {
    await this.tasksRepo.update(id, updateData);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.tasksRepo.delete(id);
  }

  async removeAll() {
    await this.tasksRepo.clear(); // Clears all rows from the tasks table
    return { message: 'All tasks deleted' };
  }

}
