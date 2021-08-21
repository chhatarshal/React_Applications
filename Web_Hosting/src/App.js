import CardConfigure from './components/UI/CardConfigure/CardConfigure';
import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';
import Button from './components/UI/Button/Button';

import React, {useState, useEffect} from 'react';
import useButton from './CustomHook/useButton';
import Login from './components/Login/Login';

function App() {

  let [clicked, setClicked] = useState(1);

  useEffect(() => {
    setClicked(0);
    return () => {
      console.log('clean up');
    }
  }, [])
  
  clicked = useButton(clicked);
  console.log('clicked from :  ' + clicked);
  //setClicked(clicked);
  const onClick = (props) => {
    console.log('--button-clicked--');
    clicked = clicked + 1;
    setClicked(clicked);
  }
  
  return (
    <>
    <Header />
    <CardConfigure theam="green" size = {'X'} count={1}>
       <Login />
    </CardConfigure>
    <CardConfigure theam="green" count={2}> 
    <Button onClick={onClick} >{clicked}</Button>
      <h1> Product Title</h1> 
      <h2> Product Sub Title</h2>      
      <p> This is my product description please buy it! </p> 
      <div>Origin of product: </div>
    </CardConfigure>     
      
    <Footer />
    </>
  );
}

export default App;
