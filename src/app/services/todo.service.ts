import { Injectable } from '@angular/core';
import { Todo } from '../Model/todo';
import { LoggerServiceService } from './logger-service.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[];
  constructor(
    private loggerService: LoggerServiceService,
  ) {}
  getTodos():Todo[]{
    return this.todos;
  }
  addTodo(todo: Todo){
    this.todos.push(todo);
  }
  deleteTodo(todo: Todo){
    const index= this.todos.indexOf(todo);
    if(index > -1){
      this.todos.splice(index, 1);
    }
  }
  loggerTodos(){
    this.loggerService.logger(this.todos);
  }
}
