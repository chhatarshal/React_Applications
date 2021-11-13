import {Link, useHistory} from 'react-router-dom'
import {useState, useContext} from 'react'
import SearchBook from './SearchBook'
import AuthContext from '../components/Store/auth-context';
let fetchDone = false;

const AllBooks = (props) => {

    const history = useHistory();

    const changeSortingHandler = (bookName) => {
      console.log(bookName, '=========')
      history.push('/bookdetail?bookname=' + bookName);
    };

    const [allBooksNames, setAllBooksNames] = useState([]);
    const authCtx = useContext(AuthContext);
    console.log(authCtx);
    let allBooks = [];
    fetchDone = props['fetchDone'];
   
    console.log('fetchDone', fetchDone);
    fetch('http://localhost:8099/booknotes/op/getUser?userId=' + authCtx.loginuserid, {
        method: 'POST',
        body: '',
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
          
          data['myBooks'].map(book => {allBooks.push(book.bookName)});
          if (allBooks.length < 1) {
              allBooks.push('No book found');
          }
          if (!fetchDone) {
            setAllBooksNames(allBooks);
            fetchDone = true;
          }
          
          console.log(data['myBooks'][0]['bookName']) 
        })
        .catch((err) => {
            console.log('err... ', err);
          alert(err.message);
        });

    return <>
    <h1>All Books</h1>
    <SearchBook />    
    <ol>
        {
        allBooksNames.map((val) => <li>             
            <div onClick={() => changeSortingHandler(val)}>{val}</div>
        </li>)
        }
    </ol>
    </>
}
export default AllBooks;