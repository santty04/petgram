import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Title, Form, Input, Button, Error } from './styles'

export const UserForm = ({ onSubmit, title, disabled, error }) => {
    const email = useInputValue('')
    const password = useInputValue('')

    const handleSubmit = (event)=> {
        event.preventDefault()
        onSubmit({
            email: email.value,
            password: password.value
        })
    }

    return (
        <>
            <Form disabled={disabled} onSubmit={handleSubmit}>
                <Title>{title}</Title>
                <Input 
                    disabled={disabled} 
                    placeholder='email' 
                    {...email} 
                />
                <Input
                    type='password' 
                    disabled={disabled} 
                    placeholder='password' 
                    {...password} 
                />
                <Button disabled={disabled} >{title}</Button>
                {error && <Error>{error}</Error>}
            </Form>
        </>
    )
}
