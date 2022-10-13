import useInput from "../hooks/useInput";

const isNotEmpty = (value) => value !== ''
const isEmail = (value) => value.includes('@')


const BasicForm = (props) => {

  const { value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput } = useInput(isNotEmpty)

  const { value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput } = useInput(isNotEmpty)

  const { value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput } = useInput(isEmail)

  let formIsValid = false

  if (nameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true
  }

  const nameInputClasses = nameHasError ? 'form-control invalid' : 'form-control'
  const lastNameInputClasses = lastNameHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailHasError ? 'form-control invalid' : 'form-control'


  const onSubmitFormHandler = (event) => {
    event.preventDefault()

    if (!formIsValid) {
      return
    }

    console.log('Submitted')
    console.log(enteredName, enteredLastName, enteredEmail)


    resetNameInput()
    resetLastNameInput()
    resetEmailInput()

  }


  return (
    <form onSubmit={onSubmitFormHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input onBlur={nameBlurHandler} onChange={nameChangeHandler} type='text' id='name' value={enteredName} />
          {nameHasError && <p className="error-text">'Name' can not be empty!</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='last-name'>Last Name</label>
          <input onBlur={lastNameBlurHandler} onChange={lastNameChangeHandler} type='text' id='last-name' value={enteredLastName} />
          {lastNameHasError && <p className="error-text">'Last Name' can not be empty!</p>}

        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input onBlur={emailBlurHandler} onChange={emailChangeHandler} type='email' id='email' value={enteredEmail} />
        {emailHasError && <p className="error-text">Enter a valid email!</p>}

      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
