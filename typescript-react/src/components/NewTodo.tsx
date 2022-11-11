import React, { useRef } from "react";

import classes from "./NewTodo.module.css"

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {

    const todoTextInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        const enteredText = todoTextInputRef.current!.value
        //const enteredText = todoTextInputRef.current?.value we use ! instead of ? if we are sure, that value is not null

        if (enteredText.trim().length === 0) {
            // throw error
            return
        }

        props.onAddTodo(enteredText)


    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;
