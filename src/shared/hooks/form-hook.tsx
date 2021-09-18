import { useCallback,useReducer } from "react";


class CustomInput{
    value!: string
    isValid! :boolean
}


class FormState{
    inputs!: {[key:string] : CustomInput}
    isValid!: boolean

}

class ActionProps {
    type?: string
    payload?: {
        inputId?: string
        value?: string
        isValid?: boolean
        inputs?: {[key:string] : CustomInput}
    }
    
}

const formReducer = (state : FormState, action : ActionProps) : FormState => {
    switch (action.type){
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for(const inputId in state.inputs){
                if(!state.inputs[inputId]) continue;
                if(inputId === action.payload!.inputId) {
                    formIsValid = formIsValid && action.payload!.isValid!
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid
                }
            } 
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.payload!.inputId!]: {
                        value: action.payload!.value!,
                        isValid: action.payload!.isValid!
                    }
                },
                isValid: formIsValid
            }
        case 'SET_DATA':{
            return {
                ...state,
                inputs: action.payload!.inputs!,
                isValid: action.payload?.isValid!
            }
        }
        default:
            return state;
    }
}



export const useForm = (initialInputs : {[key:string] : CustomInput}, initialFormValidity : boolean) : [FormState,Function, Function] => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initialInputs,
        isValid: initialFormValidity
    })

    const inputHandler = useCallback((id,value,isValid) => {
        const payload = {
            value,
            isValid,
            inputId: id
        }
        dispatch({type: 'INPUT_CHANGE', payload })
    },[]) 

    const setFormData = useCallback((inputsData : {[key:string] : CustomInput}, formValidity : boolean) => {
        const payload ={
            inputs: inputsData,
            isValid: formValidity
        }
        
        dispatch({
            type: 'SET_DATA',
            payload
        })
    },[])


    return [formState, inputHandler, setFormData];
}


