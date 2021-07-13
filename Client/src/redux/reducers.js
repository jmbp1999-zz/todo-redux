import { ADD_TODOS,ADD_TODO, UPDATE_TODO, DELETE_TODO, addTodos } from './actions';
const initialState = [];
export let reducer = (state = initialState, action) => {
    let newTodos;
    switch (action.type) {
        case ADD_TODOS:
            return action.payload
        case ADD_TODO:
            newTodos = [...state];
            newTodos.push(action.payload);
            addTodos();
            return newTodos;
        case DELETE_TODO:
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id != action.payload);
            addTodos();
            return newTodos;
        case UPDATE_TODO:
            newTodos = [...state];
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if (newTodos[i].id == action.payload.id) {
                    break;
                }
            }
            if (index != -1) {
                newTodos[index] = action.payload;
                return newTodos;
            }

    }
    return state;
}