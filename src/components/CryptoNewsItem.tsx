import { FiLink } from 'react-icons/fi';

import { INews } from '../services/RapidApiCallsTypes';

type CryptoNewsItemTypes = {
    news: INews;
}

const CryptoNewsItem = ({ news }: CryptoNewsItemTypes) => {
    const { name, description, image, url } = news;

    return (
        <div className='CryptoNewsItem'>
            <div className='CryptoNewsItem__image'>
                <p>{name}</p>
                <img src={image?.thumbnail?.contentUrl} alt={name} />
            </div>
            <div className='CryptoNewsItem__info'>
                <p>{description}</p>
                <a href={url} target='_blank'>Learn More <FiLink className='CryptoNewsItem__info-link-icon' /></a>
            </div>
        </div>
    );
}

export default CryptoNewsItem;