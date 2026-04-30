import React from "react";
import { AuthTemplate } from "../../components/templates";
import { LoginForm } from "../../components/organisms";


const LoginPage = () => {

    return (
        <AuthTemplate title="login">
            <LoginForm></LoginForm>
        </AuthTemplate>
    )
}


export default LoginPage;