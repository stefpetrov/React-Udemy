import { useState } from "react";


const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsTouched, setEnteredNameiSTouched] = useState(false)

  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailIsTouched, setEnteredEmailisTouched] = useState(false)


  const enteredNameIsValid = enteredName.trim() !== ''
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched
  let formIsValid = false

  const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@')
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched


  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameiSTouched(true)
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value)

  }

  const emailInputBlurHandler = () => {
    setEnteredEmailisTouched(true)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    setEnteredNameiSTouched(true)
    setEnteredEmailisTouched(true)

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return
    }

    setEnteredName('')
    setEnteredNameiSTouched(false)

    setEnteredEmail('')
    setEnteredEmailisTouched(false)
  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control'


  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input onBlur={nameInputBlurHandler} onChange={nameInputChangeHandler} type='text' id='name' value={enteredName} />
        {nameInputIsInvalid && <p className="error-text" >Name must not be empty!</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input onBlur={emailInputBlurHandler} onChange={emailInputChangeHandler} type='email' id='email' value={enteredEmail} />
        {emailInputIsInvalid && <p className="error-text" >Please add a valid email!</p>}

      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
