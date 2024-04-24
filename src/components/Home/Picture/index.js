import './index.scss';
import Mazen from "../../../assets/images/Mazen.png";

const Picture = () => {
    return (
        <div className='picture'>
            <div className='image'>
                <img className='Mazen_Ibrahim' src={Mazen} alt="Mazen Ibrahim" />
            </div>
            <div className='content'>
                <h2 className='info'>Mazen Ibrahim</h2>
                <p>Check the About Me page to know me better!</p>
            </div>
        </div>
    )
}

export default Picture