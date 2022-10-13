import { useRef, useState } from "react";


const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameIsTouched, setEnteredNameiSTouched] = useState(false)
  // const nameInputRef = useRef()

  const inputChangeHandler = (event) => {
    setEnteredName(event.target.value)

    

  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    setEnteredNameiSTouched(true)

    if (enteredName === '') {
      setEnteredNameIsValid(false)
      return
    }

    setEnteredNameIsValid(true)

    console.log(enteredName)
    setEnteredName('')
    // console.log(nameInputRef.current.value)
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'


  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input onChange={inputChangeHandler} type='text' id='name' value={enteredName} />
        {nameInputIsInvalid && <p className="error-text" >Name must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
