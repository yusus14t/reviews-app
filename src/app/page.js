"use client"
import React, { useState, useEffect } from 'react';
import "./page.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import ReviewFormModal from '@/components/ReviewFormModal';

const Page = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Initial reviews
    const initialReviews = [
      {
        safetyRating: 5,
        communication: 4,
        review: 'Great experience with this service!',
        recommend: 'yes',
      },
      {
        safetyRating: 3,
        communication: 5,
        review: 'Could improve safety measures.',
        recommend: 'no',
      },
    ];
    setReviews(initialReviews);
  }, []);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSubmitReview = (review) => {
    setReviews([review, ...reviews]);
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
     
      <ReviewFormModal
        show={showModal}
        handleClose={handleCloseModal}
        handleSubmit={handleSubmitReview}
      />
      <h2 className='mb-1 mt-3 text-light'>Reviews</h2>
      <div className='main-content p-2'>
        <ul className='list-unstyled'>
          {reviews.map((review, index) => (
            <li key={index}>
              <div className='review-card p-3 bg-light rounded my-2'>
                <div className='mb-2 p-2 border rounded'>
                  <label>Safety</label>
                  <div>
                    {[...Array(review.safetyRating)].map((_, i) => (
                      <FontAwesomeIcon key={i} className='fs-5' icon={faStar} />
                    ))}
                  </div>
                </div>
                <div className='mb-2 p-2 border rounded'>
                  <label>Communication</label>
                  <div>
                    {[...Array(review.communication)].map((_, i) => (
                      <FontAwesomeIcon key={i} className='fs-5' icon={faStar} />
                    ))}
                  </div>
                </div>
                <div className='mb-2 p-2 border rounded'>
                  <label>Review</label>
                  <p className='mb-0'>"{review.review}"</p>
                </div>
                <div className='p-2 border rounded'>
                  <label>Recommend</label>
                  <div>
                      {review.recommend === 'yes' ? (
                        <FontAwesomeIcon className='fs-3 text-success' icon={faThumbsUp} />
                      ) : (
                        <FontAwesomeIcon className='fs-3 text-danger' icon={faThumbsDown} />
                      )}
                      {/* No text */}
                    </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <span className='addbtn bg-secondary px-1 px-2 text-light' onClick={handleShowModal}>
        Add Review
      </span>
    </div>
  );
};

export default Page;
