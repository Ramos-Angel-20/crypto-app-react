import { useReducer, useCallback } from 'react';

import { getCryptoNews } from '../services/RapidApiCalls';
import { NewsReducerAction, NewsReducerState, Freshness } from './useCryptoNewsTypes';

const initialNewsState: NewsReducerState = {
    newsList: null,
    isLoading: false,
    error: null
}

const cryptoNewsReducer = (state: NewsReducerState = initialNewsState, action: NewsReducerAction): NewsReducerState => {
    switch (action.type) {
        case 'START_REQUEST':
            return {
                ...state,
                isLoading: action.payload.loading
            };

        case 'SUCCESS':
            return {
                ...state,
                newsList: action.payload.newsList,
                isLoading: false
            };

        case 'ERROR':
            return {
                ...state,
                error: action.payload.error,
                isLoading: action.payload.loading
            };

        default:
            return state;
    }
}

const useCryptoNews = () => {

    const [cryptoNewsState, dispatch] = useReducer(cryptoNewsReducer, initialNewsState);

    const getNews = useCallback((freshness: Freshness) => {

        dispatch({ type: 'START_REQUEST', payload: { loading: true } });

        getCryptoNews(freshness).then((result) => {

            dispatch({ type: 'SUCCESS', payload: { loading: false, newsList: result } });

        }).catch(err => {

            dispatch({type: 'ERROR', payload: {loading: false, error: err}})

        });
    }, []);

    return {
        ...cryptoNewsState,
        getNews
    };
}

export default useCryptoNews;
