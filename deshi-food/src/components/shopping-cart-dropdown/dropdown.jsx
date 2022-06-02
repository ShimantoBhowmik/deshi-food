import React from 'react';

import Button from '../button/button';

import './dropdown.scss';


const Dropdown = () =>{
    return(
        <div className="dropdown">
            <div className="items"/>
            <Button buttonType='inverted' > CHECKOUT</Button>
        </div>
    )

}

export default Dropdown;