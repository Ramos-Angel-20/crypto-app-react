import { INews } from "../services/RapidApiCallsTypes"

export type Freshness = 'Day' | 'Week' | 'Month';

export type NewsReducerAction = 
{
    type: 'START_REQUEST'
    payload: {
        loading: boolean
    }
} 
    |
{
    type: 'SUCCESS',
    payload: {
        newsList: INews[],
        loading: boolean
    }
}
    |
{
    type: 'ERROR',
    payload: {
        error: string,
        loading: boolean
    }
};

export interface NewsReducerState {
    newsList: INews[] | null,
    isLoading: boolean,
    error: string | null
}