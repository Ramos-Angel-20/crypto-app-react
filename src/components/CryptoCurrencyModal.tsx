import { FaTimes } from 'react-icons/fa';

import { ICoin } from '../services/RapidApiCallsTypes';

type CryptoCurrencyModal = {
    coin: ICoin;
    onClose: Function
}

const CryptoCurrencyModal = ({ coin, onClose }: CryptoCurrencyModal) => {
    const {
        allTimeHigh,
        approvedSupply,
        uuid,
        change,
        circulatingSupply,
        color,
        confirmedSupply,
        description,
        firstSeen,
        history,
        iconType,
        iconUrl,
        id,
        links,
        listedAt,
        marketCap,
        name,
        numberOfExchanges,
        numberOfMarkets,
        penalty,
        price,
        rank,
        slug,
        socials,
        symbol,
        totalSupply,
        type,
        volume,
        websiteUrl
    } = coin;

    return (
        <div className='CryptoCurrencyModal'>

            <div className='CryptoCurrencyModal__closeButton'>
                <FaTimes onClick={() => onClose()} />
            </div>


            <div className='CryptoCurrencyModal__icon'>
                <img src={iconUrl} alt={name} />
            </div>

            <div className="CryptoCurrencyModal__info">
                <p className='CryptoCurrencyModal__info-name'>{name}</p>
                <hr />
                <div className='CryptoCurrencyModal__info-fields'>
                    <p><span>Rank:</span><br /> {rank}</p>
                    <p><span>Circulating supply:</span><br />{circulatingSupply.toFixed(2)}</p>
                    <p><span>Volume:</span><br />{volume}</p>
                    <p><span>Change:</span><br />{change}</p>
                </div>
            </div>


        </div>
    );
}

export default CryptoCurrencyModal;