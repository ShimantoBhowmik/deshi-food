import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/logo.svg'
import { UserContext } from '../../contexts/user';
import { signOutUser } from '../../utils/firebase/firebase';
import './nav.scss';

const Nav = () => {
  const { currUser } = useContext(UserContext);
  


  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
            <Logo className="logo" />
        </Link>
        <div className="links">
          <Link className="link" to='/shop'>
            SHOP
          </Link>
          {
            currUser ? (
              <span className="link" onClick={signOutUser}>
                SIGN OUT
              </span>
            ) :(
              <Link className="link" to='/sign-in'>
                SIGN IN
              </Link>
            )
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;