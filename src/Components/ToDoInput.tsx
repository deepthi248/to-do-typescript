import React, { useRef } from 'react'
import { toDoInputSetType } from '../Interfaces'
export const ToDoInput: React.FC<toDoInputSetType> = ({ toDoText, setToDo, handleAddInput }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form onSubmit={(event) => {
            handleAddInput(event)
            inputRef.current?.blur()
        }}>
            <input
                ref={inputRef}
                value={toDoText}
                onChange={event => setToDo(event?.target.value)}
                placeholder="Enter the task"
            />
            <button type='submit'>
                Go
            </button>
        </form>
    )
}
