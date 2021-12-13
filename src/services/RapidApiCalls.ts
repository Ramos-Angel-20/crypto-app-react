import axios, { Method } from 'axios';

import { INews, ICoin } from './RapidApiCallsTypes';

export const getCryptoNews = async (freshness: string): Promise<INews[] | any> => {
    try {

        const method: Method = 'GET';

        const requestConfig = {
            method,
            url: 'https://bing-news-search1.p.rapidapi.com/news/search',
            params: { q: 'crypto', safeSearch: 'Off', textFormat: 'Raw', freshness },
            headers: {
                'x-bingapis-sdk': 'true',
                'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_X_RAPIDAPI_KEY
            }
        };

        const response = await axios.request(requestConfig);
        
        if (response.status !== 200 || !response.data) {
            throw new Error('Something went wrong on news loading...');
        }

        const results: INews[] = response.data.value;
        return results;

    } catch (err) {
        if (err instanceof Error) {
            return err.message;
        }
    }
}

export const getCryptoCurrencies = async (): Promise<ICoin[] | any> => {
    try {
        const method: Method = 'GET';

        const requestConfig = {
            method,
            url: 'https://coinranking1.p.rapidapi.com/coins',
            headers: {
                'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_X_RAPIDAPI_KEY
            }
        };

        const response = await axios.request(requestConfig);

        if (response.status !== 200 || !response.data) {
            throw new Error('Something went wrong fetching the coins...');
        }

        const result: ICoin[] = response.data.data.coins;
        return result;

    } catch (err) {
        if (err instanceof Error) {
            return err.message;
        }
    }
}