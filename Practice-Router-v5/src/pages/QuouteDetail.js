import { Fragment } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const DUMMY_QUOTES = [
    { id: "q1", author: "Stefan", text: "React is the best!" },
    { id: "q2", author: "Stefan Petrov", text: "Learning React is the great!" },
];

const QuouteDetail = () => {
    const params = useParams();
    const match = useRouteMatch();


    const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

    if (!quote) {
        return <NoQuotesFound />;
    }

    return (
        <Fragment>
            <HighlightedQuote quote={quote.author} text={quote.text} />
            <Route path={`${match.path}`} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>
                        {/* with match url, we use the current url and add /comments to it as Link */}
                        Load comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                {/* we use match.path, instead of hardcored /quotes/${params.quoteId} so if
                we change the main Route, it is not necessery to change the neseted routes */}
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuouteDetail;
