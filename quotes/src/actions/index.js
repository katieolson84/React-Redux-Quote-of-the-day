import axios from 'axios';

export const FETCHING_QUOTE_START = 'FETCHING_QUOTE_START';
export const FETCHING_QUOTE_SUCCESS = 'FETCHING_QUOTE_SUCCESS';
export const FETCHING_QUOTE_FAIL = 'FETCHING_QUOTE_FAIL';

export const getQuote = () => {
    return (dispatch => {
        dispatch(fetchQuoteLoading());

        axios
            .get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes`)
            .then(res=> {
                dispatch(fetchQuoteSuccess(res.data));
                // dispatch({type:FETCHING_QUOTE_AUTHOR, payload:res.data.quote.quoteAuthor});
            })
            .catch(err => {
                dispatch(fetchQuoteFail(err.response.message));
            });
    });
}

export const fetchQuoteLoading = () => {
    return({ type:FETCHING_QUOTE_START});
}

export const fetchQuoteSuccess = (quote) => {
    return({type:FETCHING_QUOTE_SUCCESS, payload:quote});
}

export const fetchQuoteFail = (error) => {
    return({type:FETCHING_QUOTE_FAIL, payload:error});
}
