import React from 'react';
import cls from './Input.css';

const input = (props) => {
    let inputElement = null;
    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={cls.InputElement} {...props.elementConfig} value={props.value} />;
            break;
        case ('textarea'):
                inputElement = <textarea className={cls.InputElement} {...props.elementConfig} value={props.value} />;
                break;
        default:
                inputElement = <input className={cls.InputElement} {...props.elementConfig} value={props.value} />;
    }

    return (
        <div className={cls.Input}>
            <label className={cls.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
};

export default input;