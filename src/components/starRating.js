import React, { Fragment } from 'react';
import styled from 'styled-components';

const Rating = styled.div`
    position: relative;
    font-size: 24px;
    width: fit-content;
`;
const RatingOverlay = styled.div`
    color: #ffd538;
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => (props.rating / 5) * 100}%;
    white-space: nowrap;
    overflow: hidden;
`;
const RatingBase = styled.div`
    color: lightgray;
    white-space: nowrap;
`;

function StarRating({ rating }) {
    return (
        <Rating>
            <RatingOverlay rating={rating}>
                {[...Array(5)].map((s, j) => (
                    <Fragment key={j}>★</Fragment>
                ))}
            </RatingOverlay>
            <RatingBase>
                {[...Array(5)].map((s, j) => (
                    <Fragment key={j}>★</Fragment>
                ))}
            </RatingBase>
        </Rating>
    );
}

export default StarRating;
