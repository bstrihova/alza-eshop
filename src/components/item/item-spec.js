import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
    opacity: 0.5;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
    padding-top: ${(props) => (props.promo ? '16px' : 0)};
    height: 100%;
`;

function ItemSpec({ spec, promos }) {
    return (
        <Fragment>
            <StyledText>{spec}</StyledText>
            {promos &&
                promos.map((promo) => (
                    <StyledText promo key={promo.id}>
                        <strong>+ ZDARMA: </strong> {promo.name}
                    </StyledText>
                ))}
        </Fragment>
    );
}

export default ItemSpec;
