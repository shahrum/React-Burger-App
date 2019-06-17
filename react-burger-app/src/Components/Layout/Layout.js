import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';

const layout = (props) => (
    <Auxiliary>
        <div>Toolbar, sideDrawer, backdrop</div>
        <main>
            {props.childern}
        </main>
    </Auxiliary>
);

export default layout;