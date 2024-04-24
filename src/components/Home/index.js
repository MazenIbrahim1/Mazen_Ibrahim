import { Link } from 'react-router-dom';
import './index.scss';
import Picture from './Picture';
import Loader from 'react-loaders';

const Home = () => {
    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br/> I'm Mazen Ibrahim</h1>
                <h2 className='home-info'>I am a rising senior at Stony Brook, majoring in Computer Science</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Picture />
        </div>
        <Loader type='ball-rotate' />
        </>
    )
}

export default Home