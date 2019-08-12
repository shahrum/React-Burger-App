import React from 'react';
import cls from './Input.css';

const input = (props) => {
    let inputElement = null;
    switch (props.inputtype) {
        case ('input'):
            inputElement = <input className={cls.InputElement} {...props} />;
            break;
        case ('textarea'):
                inputElement = <textarea className={cls.InputElement} {...props} />;
                break;
        default:
                inputElement = <input className={cls.InputElement} {...props} />;
    }

    return (
        <div className={cls.Input}>
            <label className={cls.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
};

export default input;