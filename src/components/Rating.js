import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function Rating({ rating, handleRating }) {
    return (
        <>
            {[...Array(5)].map((_, i) => {
                return (
                    <span key={i} onClick={() => handleRating(i)}>
                        {rating > i ? (
                            <AiFillStar fontSize="18px" />
                        ) : (
                            <AiOutlineStar fontSize="18px" />
                        )}
                    </span>
                );
            })}
        </>
    );
}

export default Rating;
