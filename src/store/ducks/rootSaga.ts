import { all, takeLatest } from 'redux-saga/effects';

import { TodosTypes } from './todos/types';
import { loadTodos, addTodo, updateTodo, deleteTodo } from './todos/sagas';

export default function* rootSaga(){
  return yield all([
    takeLatest(TodosTypes.ADD_TODO, addTodo),
    takeLatest(TodosTypes.LOAD_TODO, loadTodos),
    takeLatest(TodosTypes.UPDATE_TODO, updateTodo),
    takeLatest(TodosTypes.DELETE_TODO, deleteTodo),
  ])
}