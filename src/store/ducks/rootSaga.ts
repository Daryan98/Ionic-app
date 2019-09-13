import { all, takeLatest } from 'redux-saga/effects';

import { TodosTypes } from './todos/types';
import { loadTodos, addTodo } from './todos/sagas';

export default function* rootSaga(){
  return yield all([
    takeLatest(TodosTypes.ADD_TODO, addTodo),
    takeLatest(TodosTypes.LOAD_TODO, loadTodos),
  ])
}