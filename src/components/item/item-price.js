import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: green;
`;

const PreviousPrice = styled.span`
    color: black;
    position: relative;
    font-size: 0.9em;
    width: fit-content;

    &:after {
        position: absolute;
        content: '';
        left: 0;
        top: 50%;
        right: 0;
        border-top: 1px solid;
        border-color: inherit;

        -webkit-transform: rotate(-16deg);
        -moz-transform: rotate(-16deg);
        -ms-transform: rotate(-16deg);
        -o-transform: rotate(-16deg);
        transform: rotate(-16deg);
    }
`;

function ItemPrice({ price, cprice }) {
    return (
        <Wrapper>
            <span>{price}</span>
            {cprice && <PreviousPrice>{cprice}</PreviousPrice>}
        </Wrapper>
    );
}

export default ItemPrice;
