import { call, put } from 'redux-saga/effects';
import api from '../../../services/api'
import { Todo } from './types';

import { loadTodosSuccess, loadTodosFailed, addTodoSuccess, addTodoFailed } from '../todos/actions';


export function* addTodo(data: any) {
  try{
    yield put(addTodoSuccess(data.payload.data));
  }catch(err){
    yield put(addTodoFailed(err));

  }
}


export function* loadTodos() {
  try{
    const response = {
      data: [{
        id: 1,
        status: 'do',
        text: "to"
      },
      {
        id: 2,
        status: 'do',
        text: "do"
      }]
    }
    yield put(loadTodosSuccess(response.data))
  }catch(err){
    yield put(loadTodosFailed(err))

  }
}

