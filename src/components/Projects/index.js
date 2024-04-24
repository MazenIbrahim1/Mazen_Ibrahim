import Sidebar from '../Sidebar';
import './index.scss';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <>
        <div className='container projects-page'>
            <div className='projects-zone'>
                <div className='project'>
                    <Link className='links' to='/'>
                        <h1>Portfolio Website</h1>
                    </Link>
                        <p>
                            - Designed and developed a Portfolio website application using React, featuring a modern and intuitive user interface. With the usage of multiple libraries to provide innovative designs and attractive animations, enhancing the website's visual appeal and user engagement.
                            <br /><br />- The goal for this project was to establish a digital presence that effectively showcases my skills and accomplishments and expanding my proficiency in React and exploring advanced techniques for improving web applications. 
                            <br /><br />- This project elevated my proficiency in frontend skills and provided a deeper understanding of React and useful npm libraries for enhanced web application quality and interactivity.
                        </p>
                </div>
                <div className='project'>
                    <a target='_blank' className='links' href='https://github.com/CSE-316-Software-Development/final-project-mazen-and-kah-shiuh'>
                        <h1>Fake StackOverflow</h1>
                    </a>
                    <p>
                        - Collaborated with a partner to design and develop a full-stack web application using the React framework for the frontend to provide responsive user interface and MongoDB, Node.js, and Express.js for the backend in order to ensure seamless data management and efficient server-side operations.. 
                        <br /><br />- This application is inspired by the actual StackOverflow website. This project aimed to replicate key functionalities and user experiences.
                        <br /><br />- This project allowed me to deepen my proficiency in collaborative web development, refine my coding and debugging techniques, and cultivate effective teamwork and communication skills within a  project environment.
                    </p>
                </div>
                <div className='project'>
                    <a target='_blank' className='links' href='https://robo-rush.firebaseapp.com'>
                        <h1>Robo-Rush</h1>
                    </a>
                    <p>
                        - Led a team of three in conceptualizing and developing a 2D game, 'Robo-Rush', where we utilized TypeScript and exploited the Wolfie2D engine to implement sprite animations and innovative gameplay mechanics, including infinite scrolling, obstacle avoidance, and game physics. 
                        <br /><br />- This game is inspired by the offline Google dinasour infinite scrolling game. The goal of this project was to create an engaging scrolling game with increasing difficulity and an appealing storyline. 
                        <br /><br />- This project honed my skills in collaborative game development, encompassing design, and coding and debugging within a real-world development environment.
                    </p>
                </div>
                <div className='project'>
                    <a target='_blank' className='links' href='https://github.com/MazenIbrahim1/Mazens_Projects/tree/main/Calculator-Project'>
                        <h1>Calculator</h1>
                    </a>
                    <p>
                        - Designed and developed a calculator application inspired by the iPhone calculator app, utilizing HTML, CSS, and JavaScript to implement its functionality.
                        <br /><br />- The goal of this project was to introduce the fundamentals of HTML, CSS, and JavaScript.
                        <br /><br />- This project provided me with insight on the relationship betweem HTML, CSS, and JavaScript and their importance in web development.
                    </p>
                </div>
                <div className='project'> 
                    <h1 text-aling='center'>More coming soon . . .</h1>
                </div>
            </div>
        </div>
        <Loader type='ball-rotate' />
        </>
    )
}

export default Projects