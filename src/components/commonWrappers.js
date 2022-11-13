import styled, { css } from 'styled-components';

export const FlexDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;

    ${(props) =>
        props.gap &&
        css`
            gap: ${props.gap};
        `}
    ${(props) =>
        props.column &&
        css`
            flex-direction: column;
        `}
`;

export const SpaceBetweenDiv = styled(FlexDiv)`
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const Centered = styled(FlexDiv)`
    align-items: center;
    justify-content: center;
`;
