import React from 'react';
import Logo from '../../Logo/Logo';

import cls from './Toolbar.css';

const toolbar = (props) => (
    <header className={cls.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>...</nav>
    </header>
);

export default toolbar;