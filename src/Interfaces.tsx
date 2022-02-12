import React from "react";

export interface toDoInputSetType {
    toDoText: string,
    setToDo: React.Dispatch<React.SetStateAction<string>>
    handleAddInput: (event: React.SyntheticEvent) => void
}

export interface toDoType {
    id: any,
    todo: string,
    isCompleted: boolean,
}

export interface toDoListType {
    todos: toDoType[];
    setToDos: React.Dispatch<React.SetStateAction<toDoType[]>>
    handleEdit: (id: number) => void
    handleDelete: (id: number) => void
    handleComplete: (id: number) => void
}