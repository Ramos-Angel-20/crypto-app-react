import { ICoin } from '../services/RapidApiCallsTypes';

export type CurrenciesReducerAction = 
{
    type: 'START_REQUEST',
    payload: {
        loading: boolean
    }
}
    |
{
    type: 'SUCCESS',
    payload: {
        loading: boolean,
        currenciesList: ICoin[]
    }
}
    |
{
    type: 'ERROR',
    payload: {
        loading: boolean,
        error: string
    }
};

export interface CurrenciesState {
    currenciesList: ICoin[],
    isLoading: boolean,
    error: string | null 
}