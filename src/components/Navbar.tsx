import { RiCoinsLine } from 'react-icons/ri';
import { BiSun, BiMoon } from 'react-icons/bi';

import { useContext } from 'react';

import headerBackground from '../assets/1267580.jpg'
import ThemeContext from '../context/theme/themeContext';


const Navbar = () => {
    const { darkMode, themeToggleHandler } = useContext(ThemeContext);

    return (
        <header>
            <div className='Navbar'>
                <div className='Navbar__brand'>
                    <span><RiCoinsLine /></span>
                    <h1>Crypto Market</h1>
                </div>
                <div className='Navbar__themeIcons' onClick={themeToggleHandler}>
                    {darkMode ? <BiSun/> : <BiMoon/>}
                </div>

            </div>
            <div className='header__backgroundImage'>
                <img src={headerBackground} alt="Crypto Market" />
                <div className='header__backgroundImage-overlay'>

                </div>
            </div>
        </header>
    );
}

export default Navbar;
