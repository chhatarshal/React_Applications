import React, {useState} from 'react';

const SimpleInput = (props) => {

  const [inputval, setInputval]= useState('');  
  const [touched, setTouched] = useState(false); 
   
  const inputisInvalid = touched && inputval.trim().length === 0;

  const nameInputChangeHandler = (event) => {
      event.preventDefault();
      console.log(event.target.value);
      setInputval(event.target.value);
      if (event.target.value.length < 1) {
        console.log('value of input is empty..');
        
        setTouched(true);
        return ;
      } else {
      
        setTouched(true);
      }
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      setInputval('');
      setTouched(false);
  }
 
  const myforclass = !inputisInvalid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={handleSubmit}>
     <div className={myforclass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={inputval} onChange={nameInputChangeHandler} />
        {inputisInvalid && <p>enter name is not valid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
      
    </form>
  );
};

export default SimpleInput;
