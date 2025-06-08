import Home from '/img/home.png';
import Profile from '/img/profile.png';
import Moon from '/img/moon.png';
import Project from '/img/project.png';
import Contact from '/img/contact.png';

export default function Header() {
    return (
    <section className="header">
        <div className="top-btn"> 
            <button className='title' disabled>Melody Ann</button>
            <div className="top-icons">
                <div className='icon-nav'><a href='#welcome'><img src={Home} alt='Home' className='icon' /></a><span className='top-text'>Home</span></div>
                <div className='icon-nav'><a href='#about'><img src={Profile}  alt='Profile' className='icon' /></a><span className='top-text'>Profile</span></div>
                <div className='icon-nav'><a href='#edu'><img src={Moon} alt='Education' className='icon' /></a><span className='top-text'>Education</span></div>
                <div className='icon-nav'><a href='#cert'><img src={Project} alt='Project' className='icon' /></a><span className='top-text'>Project</span></div>
                <div className='icon-nav'><a href='#Welcome'><img src={Contact} alt='Contact' className='icon' /></a><span className='top-text'>Contact</span></div>
            </div>
        </div>
    </section>

    )
}