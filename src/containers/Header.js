import React from 'react';
import styled from 'styled-components';
import Categories from '../components/categories';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    gap: 24px;

    h1 {
        color: #00275b;
    }
`;

function Header() {
    return (
        <StyledHeader>
            <h1>Notebooky</h1>
            <Categories />
        </StyledHeader>
    );
}

export default Header;
