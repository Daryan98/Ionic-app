import { call, put } from 'redux-saga/effects';
import api from '../../../services/api'

import { loadTodosSuccess, loadTodosFailed } from '../todos/actions';

export function* loadTodos() {
  try{
    const response = {
      data: [{
        id: 1,
        name: "to"
      },
      {
        id: 2,
        name: "do"
      }]
    }
    yield put(loadTodosSuccess(response.data))
  }catch(err){
    yield put(loadTodosFailed())

  }
}