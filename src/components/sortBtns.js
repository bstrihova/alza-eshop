import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 16px 4px;
    @media only screen and (min-width: 768px) {
        display: block;
        border-bottom: 1px solid black;
        width: calc(100% + 48px);
        margin: 0px -24px;
        padding-left: 24px;
    }
`;

const Item = styled.span`
    border-bottom: 4px solid
        ${(props) => (props.active ? 'rgb(0, 148, 231)' : 'transparent')};
    &:hover {
        border-bottom: 4px solid rgb(0, 148, 231);
    }
    align-self: flex-end;
    padding-bottom: 8px;

    @media only screen and (min-width: 768px) {
        text-align: center;
        padding: 4px 24px;
        width: 160px;
        display: inline-block;
        border-radius: 8px 8px 0px 0px;
        border: 1px solid black;
        border-right-width: 0;
        background-color: ${(props) => (props.active ? 'white' : 'lightgray')};
        transition: 0.3s;
        cursor: pointer;
        border-bottom: 0;
        flex-basis: unset;
        &:last-of-type {
            border-right-width: 1px;
        }
        &:hover {
            background-color: white;
            border-bottom: 0;
        }
    }
`;

function SortBtns() {
    return (
        <Wrapper>
            <Item>TOP</Item>
            <Item active>Nejprodavanejsi</Item>
            <Item>Od nejlevnejsiho</Item>
            <Item>Od nejdrazsiho</Item>
        </Wrapper>
    );
}

export default SortBtns;
