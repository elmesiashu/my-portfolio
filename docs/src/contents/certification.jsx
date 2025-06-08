import React, { useState, useEffect } from "react";
import certificate from '../data/certificates.json';

export default function Certificates() {
  const [startIndex, setStartIndex] = useState(0);
  const imgCount = 5;

  const getImages = () => {
    return Array.from({ length: imgCount}, (_, i) => {
        return certificate[(startIndex + i) % certificate.length];
    })
  }

  const rotateLeft = () => {
    setStartIndex((prevIndex) => (prevIndex +1) % certificate.length)
  }

  useEffect(() => {
    const interval= setInterval(() => {
        rotateLeft();}, 5000);
        return () => clearInterval(interval);
  }, [])

  return (
    <section className="cert" id="cert">
        <h1>Certification</h1>
        {/* learned software */}
        <div className='cert-container'> 
            { certificate.map((certificates, id) => (
              <div className='cert-info'>
                <img src={certificates.imgSrc} alt={certificates.title} className='cert-img'/>
              </div>
            ))}
        </div>
    </section>
  );
}
