import Myself from '/img/self.jpg';
import resume from '../data/MAF_Resume.pdf';

export default function about() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.setAttribute('download', 'MAF_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
        <section className="about" id="about">
            <h1>About me</h1>
            <div className="about-container">
                {/* sentence information */}
                <div className="about-child">      
                    <div className="about-text">
                        <p>A passionate IT student at Kwantlen Polytechnic University, driven by a strong desire to grow and expand skills in software 
                            development and coding. Eager to explore and master new technologies through both academic learning and practical application. 
                            Actively engaged in group projects that involve building full-stack solutions, including websites, web applications, and software 
                            tools with experience across frontend design and backend development. Enthusiastic about hands-on exercises, real-world challenges, 
                            and collaborative environments that foster continuous learning and personal growth. Adaptable, self-motivated, and committed to 
                            lifelong learning in the ever-evolving tech landscape.</p>
                    </div>
                </div>

                {/* links information - short version */}
                <div className="about-child">
                    <div className="img-container"><img src={Myself} alt="self" className="myself" /></div>
                    <div className="about-links">
                        <ul>
                            <li>
                                <a href="">
                                    <button className="btn1" disabled><p>Melody Ann Fuentes</p></button>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <button className="btn1" disabled ><p>BTECH - Information Technology</p></button>
                                </a>
                            </li>
                            <li>
                                 <a href="https://www.kpu.ca/">
                                    <button className="btn"><p>Kwantlen Polytechnic University</p></button>
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/melodyannfuentes/">
                                    <button className="btn"><p>LinkedIn</p></button>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/elmesiashu">
                                    <button className="btn"><p>GitHub</p></button>
                                </a>
                            </li>
                            <li><a href="">
                                    <button onClick={handleDownload} className="btn"><p>Download Resume/CVV</p></button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}