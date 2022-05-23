import { Controller, Post, Req, Get, Put, Patch, Delete, Param, Query, Body } from '@nestjs/common';
import { Request } from 'express';
import { TaskDTO } from './dto/task.dto';

import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {

    constructor(private readonly taskService: TaskService) { }

    @Post()
    create(@Body() taskDTO: TaskDTO) {
        return this.taskService.create(taskDTO);
    }
}
