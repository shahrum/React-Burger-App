import React from 'react';
import cls from './Input.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [cls.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(cls.Invalid);
    }

    let validationError = null;
    if (props.invalid && props.touched) {
        console.log('props: ', props);
        validationError = <p className={cls.ValidationError}>{props.errorMessage}</p>;
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (

                <select
                    onChange={props.changed}
                    className={inputClasses.join(' ')}
                    value={props.value}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>{option.displayValue}</option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />;
    }

    return (
        <div className={cls.Input}>
            <label className={cls.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    )
};

export default input;