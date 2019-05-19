import React, { useState, useReducer } from 'react'
import { TodoReducer, TodoContext } from './TodoContext'
import TodoList from './TodoList'

function TodoForm() {
    const [state, dispatch] = useReducer(TodoReducer, [])
    const [topic, setTopic] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        dispatch({ type: 'add' })
        setTopic('')
        console.log(state)
    }

    return (
        <TodoContext.Provider value={{state, dispatch}}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={topic}
                    onChange={e => setTopic(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
            <TodoList />
        </TodoContext.Provider>
    )
}

export default TodoForm
