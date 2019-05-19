import React, {useContext} from 'react'
import { TodoContext } from './TodoContext'

function TodoList(props) {
    const { state } = useContext(TodoContext)
    return (
        <div>
            <ul>
                {state.map(item => (<li key={item.id}>{item.id}</li>))}
            </ul>
        </div> 
    )
}

export default TodoList