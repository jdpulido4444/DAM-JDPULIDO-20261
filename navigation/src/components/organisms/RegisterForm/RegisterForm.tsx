import React from "react";
import { Button } from "../../atoms";


interface RegisterFormProps {
    onSubmit : () => void;
}

const RegisterForm = ({onSubmit}:RegisterFormProps) => {
    return (
        <view>
            <text>Formulario login</text>
            <Button 
                title="Registrarme" 
                onSubmit={onSubmit} >
            </Button>
        </view>
    )

}


export default RegisterForm;