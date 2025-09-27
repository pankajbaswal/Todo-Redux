import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "../constants";

function todoReducer(todos =[],action){
    if(action.type==ADD_TODO){
        return [...todos , {id :action.payload.id , title : action.payload.title}];
    }
    if(action.type ==REMOVE_TODO){
       return  todos.filter( todo => action.payload ==todo.id)
    }
    if(action.type ==EDIT_TODO){
      return todos.map( todo => {
        if(todo.id ==action.payload.id){
            todo.title =action.payload.title
        }
        return todo;
      })
    }
    return todos;
}


export default todoReducer;