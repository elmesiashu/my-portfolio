import React from 'react';
import { useState, useEffect } from "react";
import Header from './header.jsx';
import About from './about.jsx';
import Education from './education.jsx';
import Software from './software.jsx';
import Certificate from './certification.jsx';
import Contact from './contact.jsx';

export default function main() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(250 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Hi! I'm Melody Ann", "An IT Student", "Welcome to my Profile Page"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
        tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
        } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(250);
        } else {
        setIndex(prevIndex => prevIndex + 1);
        }
    };

    return (
        <>
        <Header />
        <section className="welcome" id='welcome'>
            <div class="welcome-container">
                <h2>
                    <span className='text1'>Welcome to my Profile Website</span>
                </h2>
                <p  className="profile-name">
                    {''}<span className="txt-rotate" dataPeriod="1000" data-rotate='[]'><span className="wrap">{text}</span></span>
                </p>    
            </div>
        </section>
        <About />
        <Education />
        <Software />
        <Certificate />
        <Contact />
        </>
    )
}