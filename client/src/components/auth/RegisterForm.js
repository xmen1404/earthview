import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import "../../styles/auth/auth.css";

const RegisterForm = () => {
    return <div className = "auth-form">
        <Form className='my-4'>
            <Form.Group>
                <Form.Control type = 'text' placeholder = 'Username' name = 'username' required/>
            </Form.Group>
            <Form.Group>
                <Form.Control type = 'password' placeholder = 'Password' name = 'password' required/>
            </Form.Group>
            <Form.Group>
                <Form.Control type = 'password' placeholder = 'Confirm Password' name = 'password' required/>
            </Form.Group>
            <Button variant = 'success' type = 'submit'>Register</Button>
        </Form>

        <div className = "suggestion">
            <div style = {{marginRight: "1rem"}}>
            Already have an account?
            </div>

            <Link to='/login'>
                <Button variant='info' size ='sm' className='ml-2'>Login</Button>
            </Link>
        </div>
    </div>
}

export default RegisterForm;