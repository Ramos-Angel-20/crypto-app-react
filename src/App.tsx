import Navbar from './components/Navbar';
import CryptoCurrencies from './components/CryptoCurrencies';
import CryptoNews from './components/CryptoNews';

import { getCryptoCurrencies } from './services/RapidApiCalls';

const App = () => {

    console.log(process.env.REACT_APP_KEY)

    return (
        <div >
            <Navbar />
            <CryptoCurrencies />
            <CryptoNews />
        </div>
    );
}

export default App;