import {useState} from 'react';

const useButton = (clicked) => {
    console.log('click received ' + clicked);
    const [val, setVal] = useState(0);
    console.log('custom use button clicked');
    return clicked + 1;
}

export default useButton;