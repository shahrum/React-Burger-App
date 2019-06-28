import React from 'react';

import cls from './Logo.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => (
    <div className={cls.Logo}>
        <img src={burgerLogo} alt="My Burger Logo" />
    </div>
);

export default logo;