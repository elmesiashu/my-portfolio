import software from '../data/software.json';

export default function Software() {
    return(
        <>
        <section className="software" id="software">
        <h1>Language/Framework/Tools</h1>
            <div className='soft-content'>
                {/* learned software */}
                <div className='skill'> 
                    <div className='skill-container'>
                        { software.map((software, id) => (
                        <div className='skill-list'>
                            <div className='skillImg'><img src={software.imgSrc} alt={software.title} width="200" /></div>
                            <p><strong><a href={software.link}>{software.title}</a></strong></p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}