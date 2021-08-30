import React, { DetailedHTMLProps, FormEventHandler, HTMLAttributes, MouseEventHandler, ReactElement } from 'react';
import './Modal.css'
import Backdrop from '../Backdrop/Backdrop';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

class ModalProps{
    show?: boolean;
    onCancle?: MouseEventHandler<HTMLDivElement> | undefined;
}
class ModalOverlayProp extends ModalProps{
    className?: string;
    style?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    headerClass?: string;
    contentClass?: string;
    footerClass?: string;
    header?: ReactElement<any,any> | string; 
    footer?: ReactElement<any,any> | string; 
    children?: ReactElement<any,any>[] | ReactElement<any,any> | string;
    onSubmit?: FormEventHandler<HTMLFormElement> | undefined;
}


const ModalOverlay = (props: ModalOverlayProp) => {
    const content = (<div className={`modal ${props.className}`} style={props.style}>
        <header className={`modal__header ${props.headerClass}`}>
            <h2>{props.header}</h2>
        </header>
        <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault()}>
            <div className={`modal__content ${props.contentClass}`}>
                {props.children}
            </div>
            <footer className={`modal__footer ${props.footerClass}`}>
                {props.footer}
            </footer>
        </form>
    </div>);
    return ReactDOM.createPortal(content, document.getElementById('modal-hook')!)
}


const Modal = (props:ModalOverlayProp) => {
    return <React.Fragment>
        {props.show && <Backdrop onClick={props.onCancle}/>}
        <CSSTransition
            in={props.show}
            mountOnEnter
            unmountOnExit
            timeout={200}
            classNames="modal"
        >
            <ModalOverlay {...props}/>
        </CSSTransition>
    </React.Fragment>
}

export default Modal;