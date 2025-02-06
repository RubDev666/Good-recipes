import styled from "styled-components";

export const Greeting = styled.h1`
    font-size: calc(1.7rem + 1vw);
    font-weight: 700;
    margin: 0 0 14px 0;
`;

export const ImageContainer = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 30px;

    picture {
        position: relative;

        &::before,
        &::after {
            background-position: top right;
            content: "";
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            background-repeat: repeat-x;
        }

        &::before  {
            left: -100%;
            background-image: url('https://www.recetasnestle.com.mx/sites/default/files/styles/webp/public/2022-07/header-all-categories-mobile.jpg.webp?itok=zaGz___N');
        }

        &::after  {
            right: -100%;
            background-image: url('https://www.recetasnestle.com.mx/sites/default/files/styles/webp/public/2022-07/header-all-categories-mobile.jpg.webp?itok=zaGz___N');
        }
    }

    img {
        width: 100%;
        height: auto;
    }

    @media screen and (width > 940px) {
        margin-bottom: 0px;
    }
`;
