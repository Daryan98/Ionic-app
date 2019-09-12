import { Reducer } from 'redux';
import {TodosState, TodosTypes} from './types';

const INITIAL_STATE: TodosState = {
  data: [{id: 1, name:"do"}],
  error: false,
  loading: true,
};

const reducer: Reducer<TodosState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodosTypes.LOAD_TODO:
      return { ...state, loading: true }
    case TodosTypes.LOAD_TODO_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload.data }
    case TodosTypes.LOAD_TODO_FAILED:
      return { ...state, loading: true, error: true, data: [] }
    default:
      return state;
  }
}

export default reducer;