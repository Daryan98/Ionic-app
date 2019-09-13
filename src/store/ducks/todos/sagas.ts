import { call, put } from 'redux-saga/effects';
import api from '../../../services/api'
import { Todo } from './types';

import { 
  loadTodosSuccess, 
  loadTodosFailed, 
  addTodoSuccess, 
  addTodoFailed,
  updateTodoSuccess,
  updateTodoFailed,
  deleteTodoSuccess,
  deleteTodoFailed
 } from '../todos/actions';


export function* addTodo(data: any) {
  try{
    yield put(addTodoSuccess(data.payload.data));
  }catch(err){
    yield put(addTodoFailed(err));

  }
}

export function* updateTodo(data: any) {
  const todos = data.payload.todos.todos;
  const updatedTodos = data.payload.todos.updatedTodos;

  const update = todos.filter(todo => todo.id !== updatedTodos.id && todo);
  update.push(updatedTodos);
  try{
    yield put(updateTodoSuccess(update));
  }catch(err){
    yield put(updateTodoFailed(err));

  }
}

export function* deleteTodo(data: any) {
  const todos = data.payload.data.todos;
  const deleteTodo = data.payload.data.deleteTodo;
  const newTodos = todos.filter(todo => todo.id !== deleteTodo.id && todo);
  try{
    yield put(deleteTodoSuccess(newTodos));
  }catch(err){
    yield put(deleteTodoFailed(err));

  }
}



export function* loadTodos() {
  try{
    const response = {
      data: [{
        id: '1',
        status: 'do',
        text: "to"
      },
      {
        id: '2',
        status: 'do',
        text: "do"
      }]
    }
    yield put(loadTodosSuccess(response.data))
  }catch(err){
    yield put(loadTodosFailed(err))

  }
}

