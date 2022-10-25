import { Fragment, useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";



const QuouteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();

    const { quoteId } = params


    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true)

    useEffect(() => {

        sendRequest(quoteId)

    }, [sendRequest, quoteId])

    if (status === 'pending') {
        return <div className="centered">
            <LoadingSpinner />
        </div>
    }
    if (error) {
        return <p className="centered">{error}</p>
    }

    // we check loadedQuote.text to chek if we have object or not, because empty obj is truthy!
    if (!loadedQuote.text) {
        return <p className="centered">No quote found</p>
    }

    return (
        <Fragment>
            <HighlightedQuote quote={loadedQuote.author} text={loadedQuote.text} />
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
