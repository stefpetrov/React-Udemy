import React, { RefObject, useRef } from "react";

const NewTodo = () => {

    const todoTextInputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (event:React.FormEvent) => {
    event.preventDefault()

    const enteredText = todoTextInputRef.current!.value 
    //const enteredText = todoTextInputRef.current?.value we use ! instead of ? if we are sure, that value is not null

    if(enteredText.trim().length === 0){
        // throw error
        return
    }

    

  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
