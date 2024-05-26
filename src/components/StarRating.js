// components/StarRating.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css'

import { useState } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating, onRatingChange }) => {
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;
        return (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            size="lg"
            onMouseEnter={() => setHover(currentRating)}
            onMouseLeave={() => setHover(null)}
            onClick={() => onRatingChange(currentRating)}
            style={{ cursor: 'pointer', color: currentRating <= (hover || rating) ? 'gold' : '#e4e5e9' }}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
