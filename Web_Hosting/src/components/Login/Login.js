import {Fragment, useState} from 'react';
import Classes from './Login.module.css';
import Button from '../UI/Button/Button';
import useHttp from '../../CustomHook/useHttp';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isLoading, error, sendRequest: hitDumy } = useHttp();

    const signIn = (event) => {
        const handle = (data) => {
            console.log('response data' , data);
            console.log('handled...')
        }
        hitDumy(
            { 
                url: 'http://localhost:8099/auth/authenticate',
                method: 'Post',
                headers : { 'Content-Type': 'application/json'},
                body: {'username' : 'user8', 'password' : 'user8'}              
            }, 
            handle           
        )
    }

    return <Fragment>
        <form>
            <div className={Classes.box}>
                <h1>Login Please</h1>
                <input type="email" name="email"    className={Classes['email']} />  <br />       
                <input type="password" name="password"    className={Classes['password']} />  <br />        
                <Button onClick={signIn}>Sign In</Button> <br /> 
                <Button>Sign Up</Button> 
            </div>  
        </form>

        <p>Forgot your password? <u className={Classes['clickHere']}>Click Here!</u></p>
  
 
    </Fragment>
}

export default Login;