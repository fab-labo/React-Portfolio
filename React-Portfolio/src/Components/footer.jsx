import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import '../Components/footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-links">
                <a href='/about'>About</a>
                <a href='/portfolio'>Portfolio</a>
                <a href='/contact'>Contact</a>
            </div>
            <div className="footer-icons">
                <a href='https://github.com/fab-labo' target='_blank' rel='noopener noreferrer'>
                    <AiOutlineGithub />
                </a>
                <a href='https://www.linkedin.com/in/fabriciolaboriel' target='_blank' rel='noopener noreferrer'>
                    <AiOutlineLinkedin />
                </a>
            </div>
            <p>© {new Date().getFullYear()} Fabricio Laboriel. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
