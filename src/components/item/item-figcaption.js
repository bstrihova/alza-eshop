import React from 'react';

import styled from 'styled-components';

const StyledFigcaption = styled.figcaption`
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow: hidden;
    height: 100%;
    gap: 8px;
    align-self: stretch;
`;

function ItemFigcaption({ children }) {
    return <StyledFigcaption>{children}</StyledFigcaption>;
}

export default ItemFigcaption;
