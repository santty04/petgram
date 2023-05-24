import React from 'react';
import Context from '../Context';
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../container/RegisterMutation';
import { useLoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = ()=> {
    const { registerMutation, loading, error } = useRegisterMutation()
    const { login, loading: loadingLogin, error: errorLogin } = useLoginMutation()
    
    return (
        <Context.Consumer>
            {
                ({ activateAuth })=> {
                    const onSubmit = ({ email, password }) => {
                        const input = { email, password }
                        const variables = { input }
                        registerMutation({ variables })
                            .then(activateAuth)
                    }

                    const onSubmitLogin = ({ email, password }) => {
                        const input = { email, password }
                        const variables = { input }
                        login({ variables })
                            .then(activateAuth)
                    }

                    const errorMsg = error && 'El usuario ya existe.'
                    const errorMsgLogin = errorLogin && 'El usuario o contraseña es incorrecto.'

                    return  <>
                        <UserForm 
                            disabled={loading} 
                            error={errorMsg} 
                            title='Registrarse' 
                            onSubmit={onSubmit} 
                        />
                        <UserForm 
                            disabled={loadingLogin}
                            error={errorMsgLogin}
                            title='Iniciar sesion' 
                            onSubmit={onSubmitLogin} 
                        />
                    </>
                }
            }
        </Context.Consumer>
    )
}
