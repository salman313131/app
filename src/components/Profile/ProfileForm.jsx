import { useContext, useRef } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {
  const authCtx = useContext(AuthContext)
  const history = useHistory()
  const newPassword = useRef()
  const onSubmitHandler=(e)=>{
    e.preventDefault()
    const enteredNewPassword = newPassword.current.value
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDYjaLcAC5qmLJlbncFS7ReOiqRNXFDyBg',
    {
      method:'POST',
      body: JSON.stringify({
        idToken:authCtx.token,
        password:enteredNewPassword,
        returnSecureToken:true
      }),
      headers: {
        'Content-Type':'application/json'
      }
    }).then(res=>{
      console.log(res)
      history.replace('/')
    }).catch(err=>console.log(err))
  }
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPassword}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
