import { useRef, useState } from "react";


const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('')
  // const nameInputRef = useRef()

  const inputChangeHandler = (event) => {
    setEnteredName(event.target.value)

  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(enteredName)
    setEnteredName('')
    // console.log(nameInputRef.current.value)
  }


  return (
    <form onSubmit={onSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input onChange={inputChangeHandler} type='text' id='name' value={enteredName} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
