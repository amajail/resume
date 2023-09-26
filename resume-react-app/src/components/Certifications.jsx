
// src/components/Certifications.jsx
import PropTypes from 'prop-types';
import classes from './Certifications.module.css';

function Certifications(props) {
    return (
        <div className={classes.Certifications}>
            <h2>Certifications</h2>
            <ul>
                {props.certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                ))}
            </ul>
        </div>
    );
}

Certifications.propTypes = {
    certifications: PropTypes.array.isRequired,
};

export default Certifications;