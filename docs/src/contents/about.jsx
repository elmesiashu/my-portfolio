
export default function about() {
    return (
        <>
        <section className="about" id="about">
            <h1>About me</h1>
            <div className="about-container">
                {/* sentence information */}
                <div className="about-child">
                    <div className="about-info">          
                        <div className="about-text">
                        <p>A passionate IT student at Kwantlen Polytechnic University, driven by a strong desire to grow and expand skills in software 
                            development and coding. Eager to explore and master new technologies through both academic learning and practical application. 
                            Actively engaged in group projects that involve building full-stack solutions, including websites, web applications, and software 
                            tools with experience across frontend design and backend development. Enthusiastic about hands-on exercises, real-world challenges, 
                            and collaborative environments that foster continuous learning and personal growth. Adaptable, self-motivated, and committed to 
                            lifelong learning in the ever-evolving tech landscape.</p>
                        </div>
                    </div>
                </div>

                {/* links information - short version */}
                <div className="about-child">
                    <div className="img-container"><img src="./img/self.jpg" alt="self" /></div>
                    <div className="about-links">
                        <ul>
                            <li>
                                <a href="">
                                    <button className="btn1" disabled>Melody Ann Fuentes</button>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <button className="btn1" disabled >BTECH - Information Technology</button>
                                </a>
                            </li>
                            <li>
                                 <a href="https://www.kpu.ca/">
                                    <button className="btn">Kwantlen Polytechnic University</button>
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/melodyannfuentes/">
                                    <button className="btn">LinkedIn</button>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/elmesiashu">
                                    <button className="btn">GitHub</button>
                                </a>
                            </li>
                            <li><a href="MAF_Resume.pdf" download>
                                    <button className="btn">Download Resume/CVV</button>
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