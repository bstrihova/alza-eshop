import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h4`
    text-overflow: ellipsis;
    width: fit-content;
`;

function ItemName({ name }) {
    return <StyledHeading>{name}</StyledHeading>;
}

export default ItemName;
