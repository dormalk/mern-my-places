import React,{useContext, useState} from 'react';
import { Button, Input } from '../../shared/components/FormElements';
import { Card } from '../../shared/components/UIElements';
import { AuthContext } from '../../shared/context/auth-context';
import { useForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import './Auth.css'


const Auth = () => {

    const auth = useContext(AuthContext);

    const [isLoginMode, setIsLoginMode] = useState(true)


    const [formState,inputHandler,setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        },
    },false)


    const handleSwitchMode = () => {
        if(!isLoginMode){
            setFormData({
                ...formState.inputs,
                name: undefined
            }, 
            formState.inputs.email.isValid &&
            formState.inputs.password.isValid)
        } else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            },false)
        }
        setIsLoginMode(prevMode => !prevMode)
    }

    const handleSubmitForm = (event: React.SyntheticEvent) => {
        event.preventDefault();
        console.log(formState.inputs)
        auth.login();
    }

    return <Card className="authentication">
        <form onSubmit={handleSubmitForm}>
            {
                !isLoginMode &&
                <Input  id="name"
                        element="input"
                        type="text"
                        label="Your Name"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a valid name"
                        onInput={inputHandler}
                        initialValue={formState.inputs.name.value}
                        initialValid={formState.inputs.name.isValid}
                ></Input>
            }
            <Input  id="email"
                    element="input"
                    type="email"
                    label="Email"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Please enter a valid email address"
                    onInput={inputHandler}
                    initialValue={formState.inputs.email.value}
                    initialValid={formState.inputs.email.isValid}
            ></Input>
            <Input  id="password"
                    element="input"
                    type="password"
                    label="Password"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText="Please enter a valid password"
                    onInput={inputHandler}
                    initialValue={formState.inputs.password.value}
                    initialValid={formState.inputs.password.isValid}
            ></Input>

            <Button type="submit" 
                    disabled={!formState.isValid}>{isLoginMode ? 'LOGIN' : 'SIGNUP'}</Button>
            <Button inverse onClick={handleSwitchMode}>
                {isLoginMode ? 'SWITCH TO SIGNUP' : 'SWITCH TO LOGIN'}
            </Button>
        </form>
    </Card>
}


export default Auth;