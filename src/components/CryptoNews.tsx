import { useState, useEffect } from 'react';

import useCryptoNews from '../hooks/useCryptoNews';
import { Freshness } from '../hooks/useCryptoNewsTypes';
import CryptoNewsItem from './CryptoNewsItem';
import SkeletonCryptoNewsItem from './SkeletonCryptoNewsItem';

const CryptoNews = () => {

    const freshness: Freshness = 'Day'; //TODO: Verificar que esto funcione.
    
    const { newsList, isLoading, error, getNews } = useCryptoNews();

    const skeletonArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    useEffect(() => {
        getNews(freshness);
    }, [getNews]);

    return (
        <div className='container CryptoNews'>
            <div className="CryptoNews__header">
                <h2>News about criptocurrencies</h2>
            </div>

            <div className='CryptoNews-list'>
                {
                    isLoading ? 
                    skeletonArray.map(item => <SkeletonCryptoNewsItem key={item}/>) 
                    : 
                    newsList?.map(item => <CryptoNewsItem key={item.url} news={item}/>)
                }
                {error && <p>{error}</p>}
            </div>
            
        </div>
    );
}

export default CryptoNews;
