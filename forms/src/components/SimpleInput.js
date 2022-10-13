import { useState } from "react";


const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsTouched, setEnteredNameiSTouched] = useState(false)


  const enteredNameIsValid = enteredName.trim() !== ''
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched
  let formIsValid = false

  //  if we have more input fields we have to combine all validation in useEffect and update
  //  the generic state formIsValid

  if (enteredNameIsValid) {
    formIsValid = true
  }

  const inputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameiSTouched(true)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    setEnteredNameiSTouched(true)

    if (!enteredNameIsValid) {
      return
    }

    setEnteredName('')
    setEnteredNameiSTouched(false)
  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input onBlur={nameInputBlurHandler} onChange={inputChangeHandler} type='text' id='name' value={enteredName} />
        {nameInputIsInvalid && <p className="error-text" >Name must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
