import React, { useRef } from 'react';
import StarRating from './starRating';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
SwiperCore.use([Pagination, Navigation]);
import styled from 'styled-components';
import ItemImg from './item/item-img';
import ItemName from './item/item-name';
import ItemSpec from './item/item-spec';
import ItemPrice from './item/item-price';
import ItemFigcaption from './item/item-figcaption';

const StyledSwiper = styled(Swiper)`
    position: relative;
    padding: 0 40px;
    width: 100%;
    height: 100%;
`;

const NavBtn = styled.div`
    position: absolute;
    cursor: pointer;
    top: 50%;
    background-color: rgb(0, 148, 231);
    padding: 16px 4px;
    border: 1px solid black;
    color: white;
    border-radius: 4px;
    z-index: 1;
    &:hover {
        background-color: rgb(0, 133, 207);
    }
    // make btn text non-selectable
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
`;

const PrevBtn = styled(NavBtn)`
    left: 0;
`;

const NextBtn = styled(NavBtn)`
    right: 0;
`;

function SwiperComponent({ data }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <StyledSwiper
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={8}
            // Responsive breakpoints
            breakpoints={{
                576: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                768: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },
                992: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                },
            }}
            loop={true}
            loopFillGroupWithBlank={true}
            modules={[Navigation]}
            onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
            }}
        >
            {data.map((x, i) => (
                <SwiperSlide key={i}>
                    <figure>
                        <ItemImg src={x.img} />
                        <ItemFigcaption>
                            <ItemName name={x.name} />
                            <StarRating rating={x.rating} />
                            <ItemSpec spec={x.spec} />
                            <ItemPrice price={x.price} />
                        </ItemFigcaption>
                    </figure>
                </SwiperSlide>
            ))}
            <PrevBtn ref={prevRef}>&lt;</PrevBtn>
            <NextBtn ref={nextRef}>&gt;</NextBtn>
        </StyledSwiper>
    );
}

export default SwiperComponent;
