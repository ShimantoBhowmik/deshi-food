import './button.scss';


const BUTTON_TYPES = {
    google: 'google-sign',
    inverted: 'inverted',

}


const Button = ({children, buttonType, ...Props}) =>{
    return(
        <button className={`button ${BUTTON_TYPES[buttonType]}`} {...Props}>
            {children}
        </button>
    )
}

export default Button;