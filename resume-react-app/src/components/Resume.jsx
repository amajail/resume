import Certifications from './Certifications';
import Experience from './Experience';
import Header from './Header'
import Summary from './Summary';
import Technologies from './Technologies';
import classes from './Resume.module.css';

function Resume() {
    const name = 'Adrian Gustavo Majail';
    const summary = 'Your summary text goes here.'
    const technologies = ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js']
    const certifications = [
        'Certification 1',
        'Certification 2',
        'Certification 3',
      ];  
      const experiences = [
        {
          title: 'Job Title 1',
          company: 'Company 1',
          year: 'Year 1 - Year 2',
          description: 'Job description goes here.',
        },
        // Add more experiences as needed
      ];
    return (
        <div className={classes.Resume}>
            <Header name={name} />
            <Summary summary={summary} />
            <Technologies technologies={technologies} />
            <Certifications certifications={certifications} />
            <Experience experiences={experiences} />
        </div>
    )
}

export default Resume; 