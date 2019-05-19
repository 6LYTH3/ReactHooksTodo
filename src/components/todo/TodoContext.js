import React from 'react'

export function TodoReducer(state, action) {
    switch (action.type) {
        case 'add': {
            return [
                ...state,
                {
                    id: Date.now(),
                    text: '',
                    completed: false,
                },
            ]
        }
        default: {
            return state
        }
    }
}

export const TodoContext = React.createContext()