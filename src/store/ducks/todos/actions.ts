import { action } from 'typesafe-actions';
import { TodosTypes, Todo } from './types';

export const loadTodos = () => action(TodosTypes.LOAD_TODO);
export const loadTodosSuccess = (data: Todo[]) => action(TodosTypes.LOAD_TODO_SUCCESS, {data});
export const loadTodosFailed = () => action(TodosTypes.LOAD_TODO_FAILED);
