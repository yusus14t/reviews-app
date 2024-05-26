// components/ReviewFormModal.js

import { useState } from 'react';
import StarRating from './StarRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const ReviewFormModal = ({ show, handleClose, handleSubmit }) => {
  const [formData, setFormData] = useState({
    safetyRating: 0,
    communication: 0,
    review: '',
    recommend: 'yes',
  });

  const handleRatingChange = (name, rating) => {
    setFormData({ ...formData, [name]: rating });
  };

  const handleRecommendationChange = (recommend) => {
    setFormData({ ...formData, recommend });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
    setFormData({
      safetyRating: 0,
      communication: 0,
      review: '',
      recommend: 'yes',
    });
    console.log(formData);
    handleClose();
  };

  return (
    <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Submit a Review</h5>
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label className="form-label">Safety Rating</label>
                <StarRating
                  rating={formData.safetyRating}
                  onRatingChange={(rating) => handleRatingChange('safetyRating', rating)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Communication</label>
                <StarRating
                  rating={formData.communication}
                  onRatingChange={(rating) => handleRatingChange('communication', rating)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Review</label>
                <textarea
                  className="form-control"
                  id="review"
                  name="review"
                  value={formData.review}
                  onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Recommend</label>
                <div>
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    size="2x"
                    onClick={() => handleRecommendationChange('yes')}
                    style={{ cursor: 'pointer', color: formData.recommend === 'yes' ? 'green' : '#e4e5e9', marginRight: '10px' }}
                  />
                  <FontAwesomeIcon
                    icon={faThumbsDown}
                    size="2x"
                    onClick={() => handleRecommendationChange('no')}
                    style={{ cursor: 'pointer', color: formData.recommend === 'no' ? 'red' : '#e4e5e9' }}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewFormModal;
