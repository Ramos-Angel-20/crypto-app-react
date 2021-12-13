import { createPortal } from 'react-dom';

type BackdropPropTypes = {
    children: React.ReactNode;
    onClose: Function;
};

const BackdropOverlay = ({ children, onClose }: BackdropPropTypes) => {
    return (
        <div className='Backdrop' onClick={() => onClose()} >
            {children}
        </div>
    );
}

const Backdrop = ({children, onClose}: BackdropPropTypes) => {
    return (
        <>
            {createPortal(<BackdropOverlay children={children} onClose={onClose}/>, document.getElementById('backdrop-root')!)}
        </>
    );
}

export default Backdrop;
