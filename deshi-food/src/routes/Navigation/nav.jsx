import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/logo.svg'
import './nav.scss';

const Nav = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
            <Logo classname='logo' />
        </Link>
        <div className='links'>
          <Link className='link' to='/shop'>
            SHOP
          </Link>
          <Link className='link' to='/sign-in'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;