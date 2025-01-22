import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';


function Footer() {
    return (
        <footer className='footer fixed-bottom text-center'>
            <a href='https://github.com/fab-labo' target='_blank' rel='noopener noreferrer'>
                <AiOutlineGithub size={40}/>
            </a>
            <a href='www.linkedin.com/in/fabriciolaboriel' target='_blank' rel='noopener noreferrer'>
                <AiOutlineLinkedin size={40}/>
            </a>
        </footer>
    )
}

export default Footer;