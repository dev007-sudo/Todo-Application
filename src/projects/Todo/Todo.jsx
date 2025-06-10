import React, { useState } from "react"
import "./Todo.css"
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./LocalStorageData";

export const Todo = () => {

    const [task, setTask] = useState(() => getLocalStorageTodoData());

    const handleFormSubmit = (inputValue) => {
        const {id, content, check} = inputValue;

        if (!content) return;
        // to check if the data is already exist or not
        const ifTodoContentMatched = task.find((curElem) => curElem.content === content
    );

    if(ifTodoContentMatched) return;
        setTask((prevTask) => [...prevTask, {id, content, check}])
    }

    // delete tododata functionality
    const handleTodoDelete = (value) => {

        const updateTodo = task.filter((curElem) => curElem.content !== value)
        setTask(updateTodo)
    }

    // checked tododata functionality
    const handleCheckedTodo = (content) =>{
        const updateTask = task.map((curElem) =>{
            if(curElem.content === content) {
                return {...curElem, checked: !curElem.checked}
            }

            else{
                return curElem
            }
        })
        setTask(updateTask)
    }

    // adding data to local storage functionality
    setLocalStorageTodoData(task);

    // clearbtn tododata functionality
    const handleClearbtn = () => {
        setTask([])
    }

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                < TodoDate />
            </header>

            <TodoForm onAddTodo={handleFormSubmit} />
            <section className="myUnOrdList">
                <ul>
                    {task.map((curElem) => {
                        return (
                            <TodoList key={curElem.id} onHandleDeleteTodo={handleTodoDelete} data={curElem.content}  onHandleCheckedTodo = {handleCheckedTodo} checked={curElem.checked}/>
                        )
                    })}
                </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={handleClearbtn}>Clear all</button>
            </section>
        </section>
    )
}
