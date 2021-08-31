import React from 'react';
import './Input.css';

class InputProps {
    id?:string;
    label?: string;
    element?: string;
    type?: string;
    placeholder?: string;
    rows?: number;
}
const Input = (props :InputProps) => {
    const element = props.element === 'input' ? 
    <input  id={props.id}
            type={props.type}
            placeholder={props.placeholder}/> : 
    <textarea id={props.id}
                rows={props.rows || 3}/>

    return <div className={`form-control`}>
        <label htmlFor={props.id}>{props.label}</label>
        {element}
    </div>
}

export default Input;