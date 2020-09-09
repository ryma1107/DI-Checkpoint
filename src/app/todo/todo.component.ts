import { Component, OnInit } from '@angular/core';
import { Todo} from '../Model/todo';
import { TodoService} from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo= new Todo();
  todos:Todo[];

  constructor(
    private todoservice: TodoService
  ) { }

  ngOnInit(): void {
    this.todos=this.todoservice.getTodos();
  }

  addTodo(){
    this.todo.id= this.todos[this.todos.length-1].id+1;
  }

}
