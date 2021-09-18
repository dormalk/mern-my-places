import React from "react";
import { Button, Input } from "../../shared/components/FormElements";
import './PlaceForm.css'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from "../../shared/hooks/form-hook";



const NewPlace = () => {
    const [formState, inputHandler] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        },
        address: {
            value: '',
            isValid: false
        }
    },false)



    const placeSubmitHandler = (event:any) => {
        event.preventDefault();
        console.log(formState.inputs)
    }
    

    return <form className="place-form">
        <Input  element="input" 
                id="title"
                type="text" 
                onInput={inputHandler}
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                label="Title"/>
        <Input  element="textarea"
                id="description" 
                onInput={inputHandler}
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (at least 5 characters)."
                label="Description"/>
        <Input  element="input"
                id="address" 
                onInput={inputHandler}
                validators={[VALIDATOR_REQUIRE]}
                errorText="Please enter a valid address."
                label="Address"/>
        <Button type="submit" 
                onClick={placeSubmitHandler}
                disabled={!formState.isValid}>
            ADD PLACE
        </Button>
    </form>
}

export default NewPlace;