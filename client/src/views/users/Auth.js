import LoginForm from '../../components/auth/LoginForm'
import RegisterForm from '../../components/auth/RegisterForm'

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