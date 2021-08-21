import React, { MouseEventHandler, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

class SideDrawerProps {
    children?: ReactElement<any,any> | string;
    show: boolean = false;
    onClick?: MouseEventHandler<HTMLElement> | undefined;
}

const SideDrawer = (props:SideDrawerProps) => {
    const content = <CSSTransition 
                        in={props.show} 
                        timeout={200} 
                        classNames="slide-in-left"
                        mountOnEnter
                        unmountOnExit>
            <aside className="side-drawer" onClick={props.onClick}>
                {props.children}
            </aside>
        </CSSTransition>

    return ReactDOM.createPortal(content,document.getElementById('side-drawer-hook')!);
}

export default SideDrawer;