import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    const multiplier = 20;
    const percentage = rating * multiplier;

    return (
      <div className="movie-card-rating">
        <div className="rating">
          <CircularProgressbar
            className="rating-bar"
            value={ percentage }
            text={ `${percentage}%` }
            styles={ buildStyles({
              textSize: '18px',
              pathTransitionDuration: 0.5,
              pathColor: '#BB85FC',
              textColor: '#BB85FC',
              trailColor: '#2e2e2e',
              backgroundColor: '#3e98c7',
            }) }
          />
        </div>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};

export default Rating;
