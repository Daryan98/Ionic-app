/**
 * Action types
 */
export enum TodosTypes {
  ADD_TODO = '@todos/ADD_TODO',
  ADD_TODO_SUCCESS = '@todos/ADD_TODO_SUCCESS',
  ADD_TODO_FAILED = '@todos/ADD_TODO_FAILED',
  LOAD_TODO = '@todos/LOAD_TODO',
  LOAD_TODO_SUCCESS = '@todos/LOAD_TODO_SUCCESS',
  LOAD_TODO_FAILED = '@todos/LOAD_TODO_FAILED',
  UPDATE_TODO = '@todos/UPDATE_TODO',
  UPDATE_TODO_SUCCESS = '@todos/UPDATE_TODO_SUCCESS',
  UPDATE_TODO_FAILED = '@todos/UPDATE_TODO_FAILED',
  DELETE_TODO = '@todos/DELETE_TODO',
  DELETE_TODO_SUCCESS = '@todos/DELETE_TODO_SUCCESS',
  DELETE_TODO_FAILED = '@todos/DELETE_TODO_FAILED',
};

 /**
  * Data types
  */

export interface Todo{
  id: String
  status: String,
  text: String
}

/**
 * State type
 */
export interface TodosState {
  readonly data: Todo[]
  readonly loading: boolean
  readonly error: boolean
}