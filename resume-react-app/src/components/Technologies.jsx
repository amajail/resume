// src/components/Technologies.jsx
import PropTypes from 'prop-types';
import classes from './Technologies.module.css';

function Technologies(props) {
  const technologies = props.technologies;

  return (
    <div className={classes.technologies}>
      <h2>Technologies</h2>
      <div className={classes.tags}>
        {technologies.map((tech, index) => (
          <span key={index} className={classes.tag}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

Technologies.propTypes = {
    technologies: PropTypes.array
};
export default Technologies;
