/**
 * Action types
 */
export enum TodosTypes {
  LOAD_TODO = '@todos/LOAD_TODO',
  LOAD_TODO_SUCCESS = '@todos/LOAD_TODO_SUCCESS',
  LOAD_TODO_FAILED = '@todos/LOAD_TODO_FAILED',
};

 /**
  * Data types
  */

export interface Todo{
  id: Number
  name: String
}

/**
 * State type
 */
export interface TodosState {
  readonly data: Todo[]
  readonly loading: boolean
  readonly error: boolean
}