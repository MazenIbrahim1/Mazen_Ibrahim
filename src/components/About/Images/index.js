import './index.scss';
import javascript from '../../../assets/images/javascript.png'
import html from '../../../assets/images/html.png'
import css from '../../../assets/images/css.png'
import java from '../../../assets/images/java.png'
import python from '../../../assets/images/python.png'
import ruby from '../../../assets/images/ruby.png'
import c from '../../../assets/images/c.png'
import sql from '../../../assets/images/sql.png'
import react from '../../../assets/images/react.png'
import node from '../../../assets/images/node.png'
import mongodb from '../../../assets/images/mongodb.png'

const Skills = () => {
    return (
       <div className='container'>
            <div className='pictures'>
                <img className='image' src={javascript} alt='JavaScript' />
                <img className='image' src={html} alt='HTML' />
                <img className='image' src={css} alt='CSS' />
                <img className='image' src={java} alt='Java' />
                <img className='image' src={python} alt='Python' />
                <img className='image' src={c} alt='C' />
                <img className='image' src={ruby} alt='Ruby' />
                <img className='image' src={sql} alt='SQL' />
                <img className='image' src={react} alt='React' />
                <img className='image' src={node} alt='Node.js' />
                <img className='image' src={mongodb} alt='MongoDB' />
            </div>
       </div>
    )
}

export default Skills