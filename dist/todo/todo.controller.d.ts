import { TodoService } from './todo.service';
import { TodoCreate } from './todo-create.dto';
import { User } from '../user/entities/user.entity';
import { Todo } from './todo.entity';
import { TodoUpdate } from './todo-update.dto';
export declare class TodoController {
    private readonly service;
    constructor(service: TodoService);
    createTodo(newTodo: TodoCreate, user: User): Promise<Todo>;
    listTodo(user: User): Promise<Todo[]>;
    getTodo(id: number, user: User): Promise<Todo>;
    updateTodo(id: number, updates: TodoUpdate, user: User): Promise<Todo>;
    removeTodo(id: number, user: User): Promise<Todo>;
    markTodoAsDone(id: number, user: User): Promise<Partial<Todo>>;
    markTodoAsPending(id: number, user: User): Promise<Partial<Todo>>;
}
