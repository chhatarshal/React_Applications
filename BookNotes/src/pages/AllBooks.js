import {Link} from 'react-router-dom'
import {useState} from 'react'
let fetchDone = false;
const AllBooks = (props) => {
    const [allBooksNames, setAllBooksNames] = useState([]);
    let allBooks = [];
    fetchDone = props['fetchDone'];
    console.log('fetchDone', fetchDone);
    fetch('http://localhost:8099/booknotes/op/getUser?userId=9', {
        method: 'POST',
        body: '',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUAxIiwiZXhwIjoxNjM2NzU5MzkzLCJpYXQiOjE2MzY3MjMzOTN9.Ke0a65thuC9QEh2-YRSOJyULFukTtlzGTHycsU7_vFw'
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
    <ol>
        {
        allBooksNames.map((val) => <li> 
            <Link to="/bookdetail">{val}</Link>
        </li>)
        }
    </ol>
    </>
}

export default AllBooks;