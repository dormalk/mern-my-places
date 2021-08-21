import React, { ReactElement } from 'react';
import './MainHeader.css';

class MainHeaderProps {
    children?: ReactElement<any,any>[] | string;
  }

const MainHeader = (props:MainHeaderProps) => {
    return <header className="main-header">
        {props.children}
    </header>
}

export default MainHeader;