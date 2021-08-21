import React, { MouseEventHandler } from 'react';
import ReactDOM from 'react-dom';
import './Backdrop.css'
class BackdropProps{
    onClick? : MouseEventHandler<HTMLDivElement> | undefined
}
const Backdrop = (props: BackdropProps) => {
    const content = <div className="backdrop" onClick={props.onClick}></div>;

    return ReactDOM.createPortal(content, document.getElementById('backdrop-hook')!);
}

export default Backdrop;