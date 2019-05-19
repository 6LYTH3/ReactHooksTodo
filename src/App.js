import React, {useState} from 'react'
import './App.css'

function App() {
    const [items, setItems] = useState(['One'])
    const [topic, setTopic] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        console.log('topic: ', topic)
        setItems([...items, topic])
        setTopic('')
    }

    return (
        <div className="App">
            <h1>Todo App</h1>
            <ul>
                {items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={topic}
                    onChange={e => setTopic(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default App
