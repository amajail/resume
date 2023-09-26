import PropTypes from 'prop-types';
import classes from './Header.module.css';

function Header(props) {
    return (
        <div className={classes.Header}>
            <h1>{props.name}</h1>
        </div>
    )
}

Header.propTypes = {
    name: PropTypes.string,
};

export default Header; 