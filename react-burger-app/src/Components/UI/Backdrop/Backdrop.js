import React from 'react';
import cls from './Backdrop.css';

const backdrop = (props) => (
    props.show ? <div className={cls.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;