import { action } from 'typesafe-actions';
import { TodosTypes, Todo } from './types';

export const addTodo = (data: Todo[]) => action(TodosTypes.ADD_TODO, { data });
export const addTodoSuccess = (data: Object) => action(TodosTypes.ADD_TODO_SUCCESS, { data });
export const addTodoFailed = (error: Object) => action(TodosTypes.ADD_TODO_FAILED, { error });

export const loadTodos = () => action(TodosTypes.LOAD_TODO);
export const loadTodosSuccess = (data: Todo[]) => action(TodosTypes.LOAD_TODO_SUCCESS, {data});
export const loadTodosFailed = (error: Object) => action(TodosTypes.LOAD_TODO_FAILED, {error});

export const updateTodo = (todos: Todo[]) => action(TodosTypes.UPDATE_TODO, { todos });
export const updateTodoSuccess = (data: Object) => action(TodosTypes.UPDATE_TODO_SUCCESS, {data});
export const updateTodoFailed = (error: Object) => action(TodosTypes.UPDATE_TODO_FAILED, {error});

export const deleteTodo = (data: Object) => action(TodosTypes.DELETE_TODO, { data });
export const deleteTodoSuccess = (data: Object) => action(TodosTypes.DELETE_TODO_SUCCESS, {data});
export const deleteTodoFailed = (error: Object) => action(TodosTypes.DELETE_TODO_FAILED, {error});
