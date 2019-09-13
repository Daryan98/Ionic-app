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
};

 /**
  * Data types
  */

export interface Todo{
  id: Number
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