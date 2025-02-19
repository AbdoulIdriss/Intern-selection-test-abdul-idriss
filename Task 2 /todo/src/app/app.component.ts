import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './interface/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo';

  todos: Todo[] = [];
  
  newTodoTitle = '';

  ngOnInit(): void {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
    }
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      this.todos.push({
        id: Date.now(),
        title: this.newTodoTitle.trim(),
        completed: false
      });
      this.newTodoTitle = '';
      this.saveTodos();
    }
  }

  toggleTodo(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.saveTodos();
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id);
    this.saveTodos();
  }

  private saveTodos(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
