import styled from 'styled-components'

export const LayoutContainer = styled.section`
    display: grid;
`
export const Image_container = styled.div`
    *width: 100svw;
    height: auto;

    img {
        width: 100%;
    }
`
export const Titles_container = styled.article`
    margin-inline: 3%;
    color: #471f05;
    display: flex;
    flex-direction: column;

    h4{
        align-self: center;
        font-size: 40px;
    }
    p{
        font-size: 30px;
        font-weight: bolder;

        @media (width < 767px) {
            align-self: center;
        }
    }

`

export const Card_container = styled.main`
    display: grid;
    margin: 0 3% 5% 3%;
    grid-template-columns: repeat(
        auto-fit, minmax(250px, 1fr)
        );
        gap: 32px;
        
        @media ( width < 767px ) {
        place-items: center;
    }
`