
import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {

  const newPasswordInputRef = useRef()
  const authCtx = useContext(AuthContext)
  const history = useHistory()

  const submitHandler = (event) => {
    event.preventDefault()

    const enteredNewPassword = newPasswordInputRef.current.value

    // add validation here

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAKwtmiuyGALMGkIdvfJp1XMhw4cczI6Rg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      })
    }).then(res => {
      // add error handling here
      history.replace('/')
    })

  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={newPasswordInputRef} type='password' id='new-password' minLength="6" />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
