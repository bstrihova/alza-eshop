import React from 'react';
import styled from 'styled-components';

const categoryNames = [
    'Macbook',
    'Herni',
    'Kancelarske',
    'Profesionalni',
    'Stylove',
    'Zakladni',
    'Dotykove',
    'Na splatky',
    'VR Ready',
    'IRIS Graphics',
    'Brasny, batohy',
    'Prislusenstvi',
];

const StyledNav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const StyledCategory = styled.div`
    background-color: lightgray;
    display: flex;
    align-items: center;
    height: 50px;
    color: black;
    padding: 8px;
    border: 1px solid lightslategray;
    flex-basis: calc(20% - 8px);
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        background-color: white;
    }

    @media only screen and (max-width: 768px) {
        flex-basis: calc(33% - 8px);
    }
    @media only screen and (max-width: 576px) {
        flex-basis: calc(50% - 8px);
    }
`;

function Categories() {
    return (
        <StyledNav>
            {categoryNames.map((c, i) => (
                <StyledCategory key={i}>{c}</StyledCategory>
            ))}
        </StyledNav>
    );
}

export default Categories;
