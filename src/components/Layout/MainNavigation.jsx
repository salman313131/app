import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import AuthContext from '../../store/auth-context';
import { useHistory } from 'react-router-dom';

const MainNavigation = () => {
   const authCtx = useContext(AuthContext)
   const history = useHistory()
   const isLoggedIn = authCtx.isLoggedIn
   const logoutButtonHandler=()=>{
    authCtx.logout()
    history.replace('/')
   }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn &&
          <li>
            <Link to='/auth'>Login</Link>
          </li>}
          {isLoggedIn &&
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          }
          {isLoggedIn &&
          <li>
            <button onClick={logoutButtonHandler}>Logout</button>
          </li>
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
