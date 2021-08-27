import React, { MouseEventHandler, ReactElement } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { Backdrop } from "../../UIElements";


class ModalOverlayProps{
    className?: string = '';
    style?: React.CSSProperties = {};
    headerClass?: string = '';
    contentClass?: string = '';
    footerClass?: string = '';
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
    header?: ReactElement<any,any>[] | ReactElement<any,any> | string;
    children?: ReactElement<any,any>[] | ReactElement<any,any> | string;
    footer?: ReactElement<any,any>[] | ReactElement<any,any> | string;
}

const ModalOverlay = (props: ModalOverlayProps) => {
    const content = (
        <div className={`modal ${props.className}`} style={props.style}>
            <header className={`modal__header ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header>
            <form onSubmit={
                props.onSubmit? props.onSubmit : event => event.preventDefault()
            }>
                <div className={`modal__content ${props.contentClass}`}>
                    {props.children}
                </div>
                <footer className={`modal__footer ${props.footerClass}`}>
                    {props.footer}
                </footer>
            </form>
        </div>
    )

    return ReactDOM.createPortal(content,document.getElementById('modal-hook')!)
}

class ModalProps extends ModalOverlayProps{
    show?: boolean;
    onCancle?: MouseEventHandler<HTMLDivElement> | undefined;
}

const Modal = (props:ModalProps) => {
    return (
        <React.Fragment>
            {props.show && <Backdrop onClick={props.onCancle}/>}
            <CSSTransition
                in={props.show}
                timeout={200}
                mountOnEnter
                unmountOnExit
                classNames='modal'
            >
                <ModalOverlay {...props}/>
            </CSSTransition>
        </React.Fragment>
    )
}

export default Modal;