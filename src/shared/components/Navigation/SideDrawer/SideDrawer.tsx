import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import './SideDrawer.css';

class SideDrawerProps {
    children?: ReactElement<any,any> | string;
}

const SideDrawer = (props:SideDrawerProps) => {
    const content = <aside className="side-drawer">
        {props.children}
    </aside>

    return ReactDOM.createPortal(content,document.getElementById('side-drawer-hook')!);
}

export default SideDrawer;