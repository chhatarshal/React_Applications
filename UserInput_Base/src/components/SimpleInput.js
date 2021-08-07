import React, {useState, useRef } from 'react';





const SimpleInput = (props) => {

  const [inputval, setInputval]= useState('');

  const refExample = useRef('');


  const nameInputChangeHandler = (event) => {
      event.preventDefault();
      console.log(event.target.value);
      setInputval(event.target.value);
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log('---------');
      console.log('get ref from event ref directly,...  ');
      console.log(refExample.current.value);
      //setInputval('');
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={refExample} type='text' id='name' value={inputval} onChange={nameInputChangeHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
