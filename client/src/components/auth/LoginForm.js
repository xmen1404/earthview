import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Link, useHistory} from 'react-router-dom'
import { useState, useContext } from 'react'
import {AuthContext} from "../../contexts/AuthContext"
import "../../styles/auth/auth.css";
import AlertMessage from '../layout/AlertMessage'

const LoginForm = () => {
    // context
    const {loginUser} = useContext(AuthContext)

    // router
    const history = useHistory();

    // local state
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })

    const [alert, setAlert] = useState(null)

    const {username,password } = loginForm

    const onChangeLoginForm = event => setLoginForm({...loginForm, [event.target.name]: event.target.value})

    const login = async event => {
        event.preventDefault()

        try {
            const loginData = await loginUser(loginForm)
            console.log(loginData)

            if(loginData.success){
                history.push('/');
            } else {
                setAlert({type: 'danger', message: loginData.message})
            }

        } catch (error){
            console.log(error)
        }
    }

    return <div className = "auth-form">
        <Form className='my-4' onSubmit={login}>
            <AlertMessage info={alert}/>
            <Form.Group>
                <Form.Control 
                                type = 'text' 
                                placeholder = 'Username' 
                                name = 'username' 
                                required value = {username} 
                                onChange={onChangeLoginForm}/>
            </Form.Group>

            <Form.Group>
                <Form.Control 
                                type = 'password' 
                                placeholder = 'Password' 
                                name = 'password' 
                                required value = {password} 
                                onChange={onChangeLoginForm}/>
            </Form.Group>

            <Button variant = 'success' type = 'submit'>Login</Button>
        </Form>

        <div className = "suggestion">
            <div style = {{marginRight: "1rem"}}>
                Don't have an account?
            </div>

            <Link to='/register'>
                <Button variant='info' size ='sm' className='ml-2'>Register</Button>
            </Link>
        </div>
    </div>
}
export default LoginForm