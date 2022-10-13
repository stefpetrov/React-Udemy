import useInput from "../hooks/useInput";

const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput((value) => value.includes('@'));

  let formIsValid = false

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()

    if (!formIsValid) {
      return
    }

    resetNameInput()
    resetEmailInput()
  }

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'


  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input onBlur={nameBlurHandler} onChange={nameChangeHandler} type='text' id='name' value={enteredName} />
        {nameInputHasError && <p className="error-text" >Name must not be empty!</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input onBlur={emailBlurHandler} onChange={emailChangeHandler} type='email' id='email' value={enteredEmail} />
        {emailInputHasError && <p className="error-text" >Please add a valid email!</p>}

      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
