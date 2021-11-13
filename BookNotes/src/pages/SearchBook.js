
import AuthContext from '../components/Store/auth-context';
import {useRef, useContext} from 'react'

const SearchBook = () => {
    const authCtx = useContext(AuthContext);
    const bookName = useRef();

    const addMyBook =() => {
        console.log('add....my.....book');
        fetch('http://localhost:8099/booknotes/op/addBookToUserWithName?userId=' + authCtx.loginuserid +'&bookName=' + bookName.current.value, {
          method: 'GET',          
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authCtx.token
          },
        })
          .then((res) => {
           // setIsLoading(false);
            console.log(res);
            console.log('res.ok ' + res.ok);
            if (res.ok) {
              return res.json();
            } else {
              return res.json().then((data) => {
                let errorMessage = 'Authentication failed!';
                throw new Error(errorMessage);
              });
            }
          })
          .then((data) => {
            console.log('data=> ' + data);
             
          })
          .catch((err) => {
              console.log('err... ', err);
            alert(err.message);
          });
      }

      const doSearch = (event) => {
            event.preventDefault();
      }

return <>
        <div>
      <form onSubmit={doSearch}>
          <input type="text" id="book" ref={bookName}></input>
          <button onClick={addMyBook}>Add</button>
      </form>
    </div>
    </>
}

export default SearchBook;