import LoginForm from '../../components/auth/LoginForm'
import RegisterForm from '../../components/auth/RegisterForm'
import  {AuthContext} from '../../contexts/AuthContext'
import {useContext} from 'react'
import {Redirect} from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
const Auth = ({ authRoute }) => {

    let body 

    body = (
        <>
            {authRoute === 'login' && <LoginForm />}
            {authRoute === 'register' && <RegisterForm />}
        </>
    )

    return (
        <div className = "landing">
            <div className = "dark-overlay">
                <div className = "landing-inner">
                    <h1>EarthView</h1>
                    {body}
                </div>
            </div>
        </div>
    )
}
export default Auth