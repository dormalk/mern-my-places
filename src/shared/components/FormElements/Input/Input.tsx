import React, { useReducer,useEffect } from 'react';
import './Input.css';
import { validate } from '../../../util/validators';


class StateProps {
    initialValue?: string | number | undefined = '';
    initialValid?: boolean = true;
    isTouched?: boolean = false;
    validators?: any[] | undefined;

}
class InputProps extends StateProps{
    id?:string;
    label?: string;
    element?: string;
    type?: string;
    placeholder?: string;
    rows?: number;
    errorText?: string;
    onInput!: Function;
}


const inputReducer = (state: StateProps, action: {type: string, payload:StateProps | undefined}) :StateProps => {
    switch (action.type){
        case 'CHANGE':
            const {initialValue,validators} = action.payload!;
            return {
                ...state,
                initialValue,
                initialValid: validate(initialValue,validators)
            }
        case 'TOUCH': 
            return {
                ...state,
                isTouched: true
            }
        default:
            return state;
    }
}

const Input = (props :InputProps) => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        initialValue: props.initialValue || '', 
        initialValid: props.initialValid || false, 
        isTouched: false})
    
    const changeHandler = (event:any) => {
        const payload : StateProps = {
            initialValue: event.target.value,
            validators: props.validators
        }
        dispatch({type:'CHANGE', payload });
    };

    const touchHandler = () => {
        dispatch({type:'TOUCH', payload:undefined});
    }

    const {id,onInput} = props;
    const {initialValue,initialValid} = inputState;

    useEffect(() => {
        onInput(id,initialValue,initialValid)
    },[id,initialValue,initialValid,onInput])

    const element = props.element === 'input' ? 
    <input  id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            onBlur={touchHandler}
            value={inputState.initialValue}
            onChange={changeHandler}/> : 
    <textarea   id={props.id}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.initialValue}
                rows={props.rows || 3}/>

    return <div className={`form-control ${!inputState.initialValid && inputState.isTouched && 'form-control--invalid'}`}>
        <label htmlFor={props.id}>{props.label}</label>
        {element}
        {!inputState.initialValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
}

export default Input;