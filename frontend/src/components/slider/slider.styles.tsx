import styled from "styled-components";

export const SliderContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    max-width: 1280px;
    margin: auto;

    /*NOTE: These classes belong to swipper*/
    .swiper-button-prev,
    .swiper-button-next {
        background: #ffffff;
        padding: 7px;
        width: 50px;
        height: 100%;
        top: 0px;
        *border-radius: 100%;
        color: #e50077;
    }

    .swiper-button-prev {
        left: 0px;
    }

    .swiper-button-next {
        right: 0px;
    }

    .swiper {
        *padding: 0px 80px 0px;
        padding-bottom: 25px;
    }

    @media screen and (min-width: 1280px) {
        padding: 0;

        .swiper {
            padding: 0px 80px 0px;
        }
    }
`;
