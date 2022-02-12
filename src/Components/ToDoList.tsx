import React from 'react'
import { toDoListType } from '../Interfaces'
import { ToDoDisplay } from './ToDoDisplay'

export const ToDoList: React.FC<toDoListType> = ({ todos, setToDos, handleComplete, handleDelete, handleEdit }) => {
    return (
        <div>
            {
                todos.map(todo => {
                    <ToDoDisplay />
                })
            }
        </div>
    )
}
