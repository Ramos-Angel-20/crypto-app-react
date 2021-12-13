import { ICoin } from '../services/RapidApiCallsTypes';

type CryptoCurrencyItemPropTypes = {
    coin: ICoin;
    onClick: (url: string) => void;
};

const CryptoCurrencyItem = ({ coin, onClick } : CryptoCurrencyItemPropTypes) => {
    return (
        <div className='CryptoCurrencyItem'>
            
            <div className='CryptoCurrencyItem-img'>
                <img src={coin?.iconUrl} alt={coin.name} />
            </div>
            
            <div className="CryptoCurrencyItem__info">
                <p><span>Coin:</span> {coin.name}</p>
                <p>Price: $ {parseFloat(coin.price).toFixed(2)}</p>
            </div>
            
            <div className="CryptoCurrencyItem__actions">
                <button onClick={() => onClick(coin.slug)}>View Details</button>
            </div>
        </div>
    )
}

export default CryptoCurrencyItem;
