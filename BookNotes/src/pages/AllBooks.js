import {Link} from 'react-router-dom'

const AllBooks = () => {
    const allBooks = ['thinkandgrowrich', 'innerengineering'];
    return <>
    <h1>All Books</h1>
    <ol>
        {
        allBooks.map((val) => <li> 
            <Link to="/bookdetail">{val}</Link>
        </li>)
        }
    </ol>
    </>
}

export default AllBooks;