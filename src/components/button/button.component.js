import './button.styles.scss'
import {Fragment} from "react";

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}


export const Button = ({children, buttonType, ...otherProps}) => {
    return (
        <button
            className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
            {...otherProps}
        >{children}</button>
    )
}