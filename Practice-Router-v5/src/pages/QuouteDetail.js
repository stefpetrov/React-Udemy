import { Fragment } from "react";
import { Link, Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";


const DUMMY_QUOTES = [
    { id: 'q1', author: 'Stefan', text: 'React is the best!' },
    { id: 'q2', author: 'Stefan Petrov', text: 'Learning React is the great!' }
]

const QuouteDetail = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

    if (!quote) {
        return <NoQuotesFound />
    }

    return (
        <Fragment>
            <HighlightedQuote quote={quote.author} text={quote.text} />
            <Route path={`/quotes/${params.quoteId}`} exact >
                <div className="centered">
                    <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>Load comments</Link>
                </div>
            </Route>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuouteDetail;
