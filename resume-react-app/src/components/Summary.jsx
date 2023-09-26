// src/components/Summary.jsx
import PropTypes from 'prop-types';
import classes from './Summary.module.css';

function Summary(props) {
  return (
    <div className={classes.Summary}>
      <p>{props.summary}</p>
    </div>
  );
}
Summary.propTypes = {
    summary: PropTypes.string
};
export default Summary;