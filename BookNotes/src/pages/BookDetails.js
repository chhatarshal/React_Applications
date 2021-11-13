import { useLocation } from 'react-router-dom';
import QuoteForm  from '../components/quotes/QuoteForm';

const BookDetails = () => {     
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    console.log(queryParams.get('bookname'));
    return<section>
    <h1>Product Detail</h1>
    <p>{queryParams.get('bookname')}</p>
    <QuoteForm />
  </section>
}
export default BookDetails;