import { action } from 'typesafe-actions';
import { TodosTypes, Todo } from './types';

export const addTodo = (data: Todo[]) => action(TodosTypes.ADD_TODO, { data });
export const addTodoSuccess = (data: Object) => action(TodosTypes.ADD_TODO_SUCCESS, { data });
export const addTodoFailed = (error: Object) => action(TodosTypes.ADD_TODO_FAILED, { error });

export const loadTodos = () => action(TodosTypes.LOAD_TODO);
export const loadTodosSuccess = (data: Todo[]) => action(TodosTypes.LOAD_TODO_SUCCESS, {data});
export const loadTodosFailed = (error: Object) => action(TodosTypes.LOAD_TODO_FAILED, {error});
