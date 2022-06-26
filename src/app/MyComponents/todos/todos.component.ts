import { Component, OnInit } from '@angular/core';
// import { Todo } from 'src/app/Todo';
import { Todo } from '../../Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "this is title1",
        active: true,
        description: "this is description 1"
      },
      {
        sno: 2,
        title: "this is title2",
        active: true,
        description: "this is description 2"
      }
    ]
  }

  ngOnInit(): void {
  }
  // deleteTodo(todo: Todo) {
  //   console.log(todo);
  // }
}
