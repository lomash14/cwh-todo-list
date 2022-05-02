import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input()todo : Todo;
@Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log('onclick has been triggered');
  }

}
