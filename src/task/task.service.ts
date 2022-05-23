import { Injectable } from '@nestjs/common';

import { ITask } from './task.interface';
import { v4 as uuidv4 } from 'uuid'
import { TaskDTO } from './dto/task.dto';
@Injectable()
export class TaskService {

    tasks: ITask[] = [];
    create(taskDTO: TaskDTO): ITask {
        const task = {
            id: uuidv4(),
            ...taskDTO,
        };
        this.tasks.push(task);
        return task;
    }
}
