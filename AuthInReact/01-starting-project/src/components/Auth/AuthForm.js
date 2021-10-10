import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
   
  const submitHandler = (event) => {
      event.preventDefault();
      console.log('submit clicked...');
      
      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;
      console.log('=============>>')
      if (isLogin) {
      } else {
        
        console.log('=============>> Going to fetch...')
        fetch(
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC__ovs-QkIo_ZZ2HFqY1OUUyRVhOCplko',
          {
            method: 'POST',
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        ).then((res) => {
          if (res.ok) {
            setIsLoading(false);
          } else {
            return res.json().then((data) => {
              // show an error modal
              let errorMessage = 'Authentication failed';
              if (data && data.error && data.error.message) {
                errorMessage = data.error.message;
              }
              console.log(data);
              alert(errorMessage);
              setIsLoading(false);
            });
          }
        });
      }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input ref="emailInputRef" type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input  ref={passwordInputRef} type='password' id='password' required />
        </div>
        <div className={classes.actions}>
         {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}
         </button>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
