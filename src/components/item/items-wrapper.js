import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    align-items: stretch;
`;

function ItemsWrapper({ children }) {
    return <Wrapper>{children}</Wrapper>;
}

export default ItemsWrapper;
