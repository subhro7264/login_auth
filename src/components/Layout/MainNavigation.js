import { Link, useNavigate } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';


const MainNavigation = () => {
const navigate=useNavigate();
  const authCtx=useContext(AuthContext);

  const isLoggedIn=authCtx.isLoggedIn;
  const logoutHandler=()=>{
    authCtx.logout();
    navigate('/auth', { replace: true })  
  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn &&<li>
            <Link to='/auth'>Login</Link>
          </li>}
          {isLoggedIn && <li>
            <Link to='/profile'>Profile</Link>
          </li>}
          {isLoggedIn && <li>
            <button onClick={logoutHandler}>Logout</button>
          </li> }
         
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
