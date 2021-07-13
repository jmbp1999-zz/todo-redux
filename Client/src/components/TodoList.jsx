import React from 'react'
import TodoItem from './TodoItem'
import { connect, useSelector } from 'react-redux'
import { addTodos } from '../redux/actions';

function TodoList({ dispatch, addTodos, todos }) {
    return (
        <div className="my-4">
            <button onClick={addTodos} className="btn btn-primary mx-2">Show what i Have to Do</button>
            {
                todos.map((todo) => {
                    return <TodoItem key={Number(todo.id)} todo={todo} />;

                })}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        todos: state

    }
}
const mapDispatchProps = {
    addTodos: addTodos,
}

export default connect(mapStateToProps, mapDispatchProps)(TodoList)
