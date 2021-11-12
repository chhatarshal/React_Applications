import { Route, Switch} from 'react-router-dom';
import Layout from './components/Header/Layout';
import AllBooks from './pages/AllBooks';
import Login from './components/Login/Login';
import {useState, useContext} from 'react';
import AuthContext from './components/Store/auth-context';

function App() {
   const [login, setLogin] = useState(false);
   const authCtx = useContext(AuthContext);
   console.log(authCtx.isLoggedIn)
   const loginHandel = () => {
      setLogin(true);
   }
  return ( 
   <Layout loginState = {login}>
    <Switch>
    <Route path="/" exact>
       <div> Login Component </div>
       {!login && <Login loginState={loginHandel}/>}
    </Route>
    <Route path="/all">
       <div> Here is list of all books I am reading</div>
       <AllBooks fetchDone={false}/>
    </Route>
  </Switch>
  </Layout>
  );
}

export default App;
