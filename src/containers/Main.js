import React, { useState, useEffect } from 'react';
import SortBtns from '../components/sortBtns';
import Swiper from '../components/swiper';
import Item from '../components/item/item';
import ItemsWrapper from '../components/item/items-wrapper';
import styled from 'styled-components';
import { FlexDiv } from '../components/commonWrappers';
import Loader from '../components/loader';
import hardcodedData from '../data/data.json';
import body from '../data/body.json';

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    gap: 24px;

    h3 {
        color: rgb(0, 148, 231);
    }
`;

function Main() {
    const [data, setData] = useState(null);
    const [errors, setErrors] = useState(null);
    const url = 'https://www.alza.cz/Services/RestService.svc/v2/products';

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url, {
                method: 'post',
                body: JSON.stringify(body),
                // I
                mode: 'no-cors',
            });
            const response_data = response.json();

            // if failed to load data, fallback on the hardcoded ones (had problems with CORS)
            if (response.status === 200) {
                setData(response_data.data);
            } else {
                setData(hardcodedData);
            }

            if (response_data.errors) {
                setErrors(response_data.errors);
            }
        };

        fetchData();
    }, []);

    if (!data) return <Loader />;

    return (
        <StyledMain>
            {errors}
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
