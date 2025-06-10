import { useState } from "react"
export const TodoForm = ({onAddTodo}) => {
    const [inputValue, setInputValue] = useState({})

    const handleInputValue = (value) => {
        setInputValue({id:value, content:value, check:false})
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        onAddTodo(inputValue)
        setInputValue({id:"", content:"" , check:false})

    }
    return (
        <section className='form'>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" className='todo-input' autoComplete='off' value={inputValue.content} onChange={(event) => handleInputValue(event.target.value)} />
                </div>
                <div>
                    <button type='submit' className='todo-btn'>
                        Add Task
                    </button>
                </div>
            </form>
        </section>
    )
}