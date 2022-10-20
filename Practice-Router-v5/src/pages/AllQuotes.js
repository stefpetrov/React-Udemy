import QuoteList from "../components/quotes/QuoteList"


const DUMMY_QUOTES = [
    {id:'q1', author:'Stefan', text:'React is the best!'},
    {id:'q2', author:'Stefan Petrov', text:'Learning React is the great!'}
]


const AllQuotes = () => {

    return (
        <QuoteList quotes={DUMMY_QUOTES} />
    )

}

export default AllQuotes