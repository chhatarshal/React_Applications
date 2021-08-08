import React, {useState, useRef, useEffect } from 'react';

const SimpleInput = (props) => {

  const [inputval, setInputval]= useState('');
  const [inputisValid, setInputisValid] = useState(false);
  const [touched, setTouched] = useState(false);

  const refExample = useRef('');
  useEffect(() => {
    console.log('use effect...')
    return () => {
      console.log('destroy')
    }
  },
    [inputisValid]
  ); 

  const inputisInvalid = touched && !inputisValid;

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
        setTouched(true);
        return ;
      }
      console.log('---------');
      console.log('get ref from event ref directly,...  ');
      console.log(refExample.current.value);
      //setInputval('');
  }

  const blurHandler = (event) => {
    console.log('blur....');
    if (refExample.current.value.length < 1) {
      console.log('value of input is empty..');
      setInputisValid(false);
      setTouched(true);
      return ;
    } else {
      setInputisValid(true);
      setTouched(true);
    }
  }
  
  const myforclass = !inputisInvalid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={handleSubmit}>
     <div className={myforclass}>
        <label htmlFor='name'>Your Name</label>
        <input ref={refExample} type='text' id='name' value={inputval} onChange={nameInputChangeHandler} onBlur = {blurHandler}/>
        {inputisInvalid && <p>enter name is not valid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
      
    </form>
  );
};

export default SimpleInput;
