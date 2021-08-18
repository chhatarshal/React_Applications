import CardConfigure from './components/UI/CardConfigure/CardConfigure';
import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';
import Button from './components/UI/Button/Button';

import React, {useState} from 'react';

function App() {

  let [clicked, setClicked] = useState(1);

  const onClick = (props) => {
    console.log('--button-clicked--');
    clicked = clicked + 1;
    setClicked(clicked);
  }
  
  return (
    <>
    <Header />
    <CardConfigure theam="green" count={1}>
        <Button onClick={onClick} >{clicked}</Button>
      </CardConfigure>
    <CardConfigure theam="green" count={2}> 
      <h1> Product Title</h1> 
      <h2> Product Sub Title</h2>      
      <p> This is my product description please buy it! </p> 
      <div>Origin of product: </div>
    </CardConfigure>
    <CardConfigure theam="black" count={2}/>
    <CardConfigure theam="green" count={3}/>    
    <Footer />
    </>
  );
}

export default App;
