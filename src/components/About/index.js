import './index.scss';
import resume from '../../assets/files/Mazen_Resume.pdf';
import Skills from './Images';
import Loader from 'react-loaders';

const About = () => {
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>About me</h1>
                <h2 className='about-info'>I am a rising senior at Stony Brook University pursuing a Bachelor's degree in Computer Science. I am a US citizen.
                <br /><br />I am passionate about learning and exploring the realms of software engineering, cybersecurity, and machine learning. I am dedicated to building strong and efficient applications that solve real-world problems.
                <br /><br />I am seeking an internship role in the tech industry to learn and work on challenging and diverse projects.
                <br /><br />I am confident that my technical skills, passion for software development, and dedication to achieving excellence will empower me to not only tackle challenges head-on but also to collaborate effectively with diverse teams, turning ideas into impactful solutions that make a difference in people's lives.</h2>
                <a href={resume} download='Mazen Resume'>
                    <button className='flat-button'>Download Resume</button>
                </a>
            </div>
            <div className='skills-zone'>
                <h1 className='skills-info'>SKILLS:</h1>
                <Skills />
            </div>
        </div>
        <Loader type='ball-rotate' />
        </>
    )
}

export default About