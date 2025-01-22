import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    const currentPage = useLocation().pathname;

    return (
        <ul className='nav nav-tabs sticky-top d-flex justify-content-between align-items-center'>
            <h3 className='d-flex'>Fabricio Laboriel</h3>
            <div className='d-flex'>
                <li className='nav-item'>
                    <Link to='/' className={currentPage === '/'? 'nav-link-active' : 'nav-link'}>About Me</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className={currentPage === '/portfolio'? 'nav-link-active' : 'nav-link'}>Portfolio</Link> 
                </li>
                <li className='nav-item'> 
                    <Link to='/' className={currentPage === '/resume'? 'nav-link-active' : 'nav-link'}>Resume</Link>
                </li>
                <li className='nav-items'>
                    <Link to='/' className={currentPage === '/contact'? 'nav-link-active' : 'nav-link'}>Contact</Link>
                 </li>
            </div>
        </ul>
    )
}

export default NavBar;