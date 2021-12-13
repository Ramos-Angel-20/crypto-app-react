import { BiSearchAlt } from 'react-icons/bi';

import { useEffect, useRef } from 'react';

import useCryptoCurrencies from '../hooks/useCryptoCurrencies';
import CryptoCurrencyItem from './CryptoCurrencyItem';
import Backdrop from './Backdrop';
import CryptoCurrencyModal from './CryptoCurrencyModal';
import SkeletonCryptoCurrencyItem from './SkeletonCryptoCurrencyItem';

const CryptoCurrencies = () => {

    const { filteredCoins, isLoading, error, selectedCoin, getCurrencies, searchTermChangeHandler, setSelectedCoinSlug, resetSelectedCoin } = useCryptoCurrencies();
    const searchBarRef = useRef<any>();

    const skeletonArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    useEffect(() => {
        getCurrencies();
    }, [getCurrencies]);

    // Hacemos focus al searchbar cuando hagamos click en el icono de la lupa.
    const searchIconClickHandler = () => {
        searchBarRef.current.focus();
    }

    const fetchSelectedCoin = (slug: string) => {
        setSelectedCoinSlug(slug);
    }


    return (
        <>
            {
                selectedCoin &&
                (
                    <Backdrop onClose={resetSelectedCoin}>
                        <CryptoCurrencyModal coin={selectedCoin} onClose={resetSelectedCoin} />
                    </Backdrop>
                )
            }
            <div className='container CryptoCurrencies'>

                <div className="CryptoCurrencies__header">
                    <h2>Currencies</h2>
                    <div className='CryptoCurrencies__header-searchBar'>
                        <BiSearchAlt onClick={searchIconClickHandler} className='CryptoCurrencies__header-searchBar__icon' />
                        <input
                            type='text'
                            placeholder='Search a coin'
                            onChange={searchTermChangeHandler}
                            ref={searchBarRef}
                            disabled={isLoading}
                        />
                    </div>
                </div>


                <div className="CryptoCurrencies-list">
                    {
                        isLoading ? 
                        skeletonArray.map(item => <SkeletonCryptoCurrencyItem key={item}/>) 
                        : 
                        filteredCoins?.map(item => <CryptoCurrencyItem key={item.uuid} coin={item} onClick={fetchSelectedCoin} />)
                    }
                    {error && <p>{error}</p>}
                </div>


            </div>
        </>
    );
}

export default CryptoCurrencies;