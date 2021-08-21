import React, { ReactElement } from 'react';
import './SideDrawer.css';

class SideDrawerProps {
    children?: ReactElement<any,any> | string;
}

const SideDrawer = (props:SideDrawerProps) => {
    return <aside className="side-drawer">
        {props.children}
    </aside>
}

export default SideDrawer;