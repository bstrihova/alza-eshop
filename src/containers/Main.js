import React from 'react';
import SortBtns from '../components/sortBtns';
import Swiper from '../components/swiper';
import Item from '../components/item/item';
import ItemsWrapper from '../components/item/items-wrapper';
import styled from 'styled-components';
import { FlexDiv } from '../components/commonWrappers';

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    gap: 24px;

    h3 {
        color: rgb(0, 148, 231);
    }
`;

function Main({ data }) {
    return (
        <StyledMain>
            <FlexDiv column gap={'8px'}>
                <h3>Nejprodavanejsi</h3>
                <Swiper data={data} />
            </FlexDiv>
            <SortBtns />
            <ItemsWrapper>
                {data.map((x, i) => (
                    <Item item={x} key={i} />
                ))}
            </ItemsWrapper>
        </StyledMain>
    );
}

export default Main;
