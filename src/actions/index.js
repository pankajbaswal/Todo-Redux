import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "../constants/index"

export const addTodo =(todo) =>({Action : ADD_TODO , payload :todo});
export const editTodo =(todoId) =>({Action :EDIT_TODO , payload :todoId});
export const removeTodo =(todo) =>({Action :REMOVE_TODO , payload:todo});