import React from "react";
import { AuthTemplate } from "../../components/templates";
import { LoginForm } from "../../components/organisms";







const RegisterPage = () => {

    const navigation = useNavigation<NaviteStackNavigationProp<AuthStackParamList>>();

    const hanldeRegister = () =>{
    console.log("Tap en registro")
    navigation.navigate('Login')
    }   


    return (
        <AuthTemplate title="Registrarme" subtitle="Inicia Sesión">
            <LoginForm onSubmit={hanldeRegister}></LoginForm>
        </AuthTemplate>
    )
}


export default RegisterPage;