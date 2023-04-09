import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { TodoCreate } from './todo-create.dto';
import { User } from '../user/entities/user.entity';
import { TodoUpdate } from './todo-update.dto';
export declare class TodoService {
    private readonly repo;
    constructor(repo: Repository<Todo>);
    createTodo(newTodo: TodoCreate): Promise<Todo>;
    listTodo(owner: User): Promise<Todo[]>;
    getTodo(id: number, owner: User): Promise<Todo>;
    updateTodo(todo: Todo, updates: TodoUpdate): Promise<Todo>;
    removeTodo(todo: Todo): Promise<Todo>;
}
