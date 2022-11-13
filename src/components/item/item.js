import React from 'react';
import ItemImg from './item-img';
import ItemName from './item-name';
import ItemSpec from './item-spec';
import ItemPrice from './item-price';
import ItemFigcaption from './item-figcaption';
import StarRating from '../starRating';
import ItemCTAbtn from './item-cta-btn';
import { SpaceBetweenDiv, Centered } from '../commonWrappers';
import styled from 'styled-components';

const StyledFigure = styled.figure`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    flex-basis: calc(20% - 32px);
    gap: 16px;

    @media only screen and (max-width: 992px) {
        flex-basis: calc(33% - 32px);
    }

    @media only screen and (max-width: 768px) {
        flex-basis: calc(50% - 32px);
    }
    @media only screen and (max-width: 576px) {
        flex-basis: 100%;
        align-items: center;
    }
`;

function Item({ item }) {
    return (
        <StyledFigure>
            <ItemFigcaption>
                <ItemName name={item.name} />
                <ItemSpec
                    spec={item.spec}
                    promos={item.promo_cnt > 0 ? item.promos : undefined}
                />
            </ItemFigcaption>
            <ItemImg src={item.img} />
            <StarRating rating={item.rating} />

            <SpaceBetweenDiv gap={'8px'}>
                <ItemPrice price={item.price} cprice={item.cprice} />
                <ItemCTAbtn item={item} />
            </SpaceBetweenDiv>
            <Centered>
                <strong>Skladem &gt; 5 ks</strong>
            </Centered>
        </StyledFigure>
    );
}

export default Item;
