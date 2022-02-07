import { useReducer, useCallback, useState, ChangeEvent } from 'react';

import { CurrenciesState, CurrenciesReducerAction } from './useCryptoCurrenciesTypes';
import { getCryptoCurrencies } from '../services/RapidApiCalls';
import { ICoin } from '../services/RapidApiCallsTypes';

const cryptoCurrenciesInitialState: CurrenciesState = {
    currenciesList: [],
    isLoading: false,
    error: null
};

const currenciesReducer = (state: CurrenciesState = cryptoCurrenciesInitialState, action: CurrenciesReducerAction): CurrenciesState => {
    switch (action.type) {
        case 'START_REQUEST':
            return {
                ...state,
                isLoading: action.payload.loading
            };

        case 'SUCCESS':
            return {
                ...state,
                isLoading: action.payload.loading,
                currenciesList: action.payload.currenciesList
            };


        case 'ERROR':
            return {
                ...state,
                isLoading: action.payload.loading,
                error: action.payload.error
            };

        default:
            return state;
    };
}

const useCryptoCurrencies = () => {

    const [state, dispatch] = useReducer(currenciesReducer, cryptoCurrenciesInitialState);


    const [searchTerm, setSearchTerm] = useState<string>('');
    // const filteredCoins: ICoin[] = state.currenciesList?.filter(coin => coin.name.includes(searchTerm) || coin.slug.includes(searchTerm))!;
    const filteredCoins: ICoin[] = state.currenciesList;


    const [selectedCoinSlug, setSelectedCoinSlug] = useState<string>('');
    const selectedCoin: ICoin = state.currenciesList?.find(coin => coin.slug === selectedCoinSlug)!;


    const searchTermChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value.trim().toLowerCase().replaceAll(' ', '');
        setSearchTerm(term);
    }


    const resetSelectedCoin = () => {
        setSelectedCoinSlug('');
    }

    const getCurrencies = useCallback(() => {

        dispatch({ type: 'START_REQUEST', payload: { 
            loading: true 
        }});

        getCryptoCurrencies().then(result => {
            
            dispatch({ type: 'SUCCESS', payload: { 
                loading: false,
                currenciesList: result
            }});

        }).catch(err => {

            dispatch({ type: 'ERROR', payload: {
                loading: false, 
                error: err
            }});

        });

    }, []);

    return {
        isLoading: state.isLoading,
        error: state.error,
        filteredCoins,
        selectedCoin,
        getCurrencies,
        searchTermChangeHandler,
        setSelectedCoinSlug,
        resetSelectedCoin
    };

}

export default useCryptoCurrencies;

