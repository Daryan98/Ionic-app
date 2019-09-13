import { Reducer } from 'redux';
import {TodosState, TodosTypes} from './types';

const INITIAL_STATE: TodosState = {
  data: [],
  error: false,
  loading: true,
};

const reducer: Reducer<TodosState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodosTypes.ADD_TODO:
      return { ...state, loading: true }
    case TodosTypes.ADD_TODO_SUCCESS:
      return { ...state, loading: false, error: false, data: [...state.data, ...action.payload.data]}
    case TodosTypes.ADD_TODO_FAILED:
      return { ...state, loading: true, error: true, data: [] }
    case TodosTypes.UPDATE_TODO:
      return { ...state, loading: true }
    case TodosTypes.UPDATE_TODO_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload.data}
    case TodosTypes.UPDATE_TODO_FAILED:
      return { ...state, loading: true, error: true, data: [] }
    case TodosTypes.DELETE_TODO:
      return { ...state, loading: true }
    case TodosTypes.DELETE_TODO_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload.data}
    case TodosTypes.DELETE_TODO_FAILED:
      return { ...state, loading: true, error: true, data: [] }
        
    // case TodosTypes.LOAD_TODO:
    //   return { ...state, loading: true }
    // case TodosTypes.LOAD_TODO_SUCCESS:
    //   return { ...state, loading: false, error: false, data: action.payload.data }
    // case TodosTypes.LOAD_TODO_FAILED:
    //   return { ...state, loading: true, error: true, data: [] }
    default:
      return state;
  }
}

export default reducer;