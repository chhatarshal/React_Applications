import React, {useState, useRef } from 'react';

const SimpleInput = (props) => {

  const [inputval, setInputval]= useState('');
  const [inputisValid, setInputisValid] = useState(true);

  const refExample = useRef('');


  const nameInputChangeHandler = (event) => {
      event.preventDefault();
      console.log(event.target.value);
      setInputval(event.target.value);
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      if (refExample.current.value.length < 1) {
        console.log('value of input is empty..');
        setInputisValid(false);
        return ;
      }
      console.log('---------');
      console.log('get ref from event ref directly,...  ');
      console.log(refExample.current.value);
      //setInputval('');
  }
  
  const myforclass = inputisValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={handleSubmit}>
     <div className={myforclass}>
        <label htmlFor='name'>Your Name</label>
        <input ref={refExample} type='text' id='name' value={inputval} onChange={nameInputChangeHandler} />
        {!inputisValid && <p>enter name is not valid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
      
    </form>
  );
};

export default SimpleInput;
