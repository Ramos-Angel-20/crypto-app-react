type Thumbnail = {
    _type: string,
    contentUrl: string,
    width: number,
    height: number
};

interface INewsProvider {
    _type: string,
    name: string,
    image: {
        _type: string,
        thumbnail: {
            _type: string,
            contentUrl: string
        }
    } | null
}

type About = {
    _type: string,
    readLink: string,
    name: string
};

export interface INews {
    ampUrl: string,
    _type: string,
    name: string,
    url: string,
    image: {
        _type: string,
        thumbnail: Thumbnail
    },
    description: string,
    about: About[] | null,
    provider: INewsProvider[] | null,
    datePublished: Date
};

/* Coins */

type Embebbed = {
    name: string,
    url: string,
    type: string
};

export interface ICoin {
    id: number,
    uuid: string,
    slug: string,
    symbol: string,
    name: string,
    description: string,
    color: string
    iconType: string,
    iconUrl: string,
    websiteUrl: string,
    socials: Embebbed[] | null,
    links: Embebbed[] | null,
    confirmedSupply: boolean,
    numberOfMarkets: number,
    numberOfExchanges: number,
    type: string,
    volume: number,
    marketCap: number,
    price: string,
    circulatingSupply: number,
    totalSupply: number,
    approvedSupply: boolean,
    firstSeen: number,
    listedAt: number,
    change: number,
    rank: number
    history: string[],
    allTimeHigh: {
        price: string,
        timestamp: number
    }
    penalty: boolean
};