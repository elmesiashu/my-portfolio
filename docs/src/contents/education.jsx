import experience from '../data/experience.json';


export default function Education() {
  return (
    <section className="edu" id="edu">
      <h1>Education</h1>
      <div className='edu-text'>
        <p>Throughout my education, I worked on a variety of projects that challenged 
        me to apply technical concepts in real-world scenarios, helping me improve my 
        problem-solving skills, strengthen my teamwork abilities, and gain hands-on 
        experience with modern development tools and frameworks.</p>
      </div>
      <div className='edu-content'>
        {/* education projects */}
        <ul className='project-container'>
          { experience.map((list, index) => (
            <li className='project-list'>
              <img src={list.imgSrc} alt={list.title} width="200" />
              <div className='project-details'>
                  <h3>{list.title}</h3>
                  <p><strong>{list.type}</strong></p>
                  <p><strong>Date:</strong> {list.startDate} - {list.endDate}</p>
                  <p><strong>Used:</strong> {list.use}</p>
              </div>
              <div className='project-exp'>
                <ul>
                  {list.experiences.map((exp, i) => (
                    <li key={i}>{exp}</li>
                  ))}
                </ul>
              </div>
            </li>
            
          ))}
        </ul>
      </div>
    </section>
  );
}

