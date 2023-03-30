import './styles.css'
import AlertIcon from '../../assets/AlertIcon'
import CookieIcon from '../../assets/CookieIcon'
import BtnOrange from '../BtnOrange'
import BtnBlue from '../BtnBlue'
import CloseIcon from '../../assets/close.svg'

function CardAlert({ image, text, btn }) {

    const icons = {
        'alert': <AlertIcon />,
        'cookie': <CookieIcon />,
    }

    const btns = {
        'orange': <BtnOrange />,
        'blue': <BtnBlue />,
    }



    return (
        <div className='conteiner-card'>
            <img className='close-btn' src={CloseIcon} alt='btnClose' />
            <div className='card'>
                <div className='image-card'> {icons[image]}  </div>
                <div className='text-card'> {text}</div>
                <div> {btns[btn]} </div>
            </div>

        </div>
    )
}

export default CardAlert