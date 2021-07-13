import axios from "axios";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const ADD_TODOS = "ADD_TODOS";

export function addTodos(){
    return async(dispatch,getState)=>{
        const items= await axios.get("http://localhost:5000/items");
        dispatch({
            type:ADD_TODOS,
            payload:items.data
        })
    }
    
}


export function addTodo(todo) {
    return async(dispatch,getState)=>{
        const item= await axios.post("http://localhost:5000/items",{
            name:todo.name
        })
        const data = {
            id:Number(item.data.id),
            name:item.data.name
        }
        dispatch({
            type:ADD_TODO,
            payload:data
        })
    }
}

export function deleteTodo(todoId) {
    return async(dispatch,getState)=>{
        const items= await axios.delete(`http://localhost:5000/items/${todoId}`);
        dispatch({
            type:DELETE_TODO,
            payload:todoId
        })
    }
}


export function updateTodo(todo) {
    return async(dispatch,getState)=>{
        const item= await axios.put(`http://localhost:5000/items/${todo.id}`,{
            name:todo.name
        })
        dispatch({
            type:UPDATE_TODO,
            payload:todo
        })
    }
}