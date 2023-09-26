// src/components/Experience.jsx
import PropTypes from 'prop-types';
import clases from './Experience.module.css';

function Experience(props) {

    const { experiences } = props;

    return (
        <div className={clases.experience}>
            <h2>Experience</h2>
            {experiences.map((exp, index) => (
                <div key={index} className={clases.job}>
                    <h3>{exp.title}</h3>
                    <p>{exp.company}</p>
                    <p>{exp.year}</p>
                    <p>{exp.description}</p>
                </div>
            ))}
        </div>
    );
}

Experience.propTypes = {
    experiences: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            company: PropTypes.string.isRequired,
            year: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Experience;
