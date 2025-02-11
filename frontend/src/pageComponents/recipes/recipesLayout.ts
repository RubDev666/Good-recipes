import {styled} from "styled-components";

export const Heading = styled.div`
    h1 {
        text-align: center;
        color: var(--color-2);
        font-size: calc(1.1rem + 1vw);
        text-transform: capitalize;
    }
`;

export const RecipesContainer = styled.div`
    display: grid;
    align-items: flex-start;
    gap: 40px;
    margin: 40px auto;
    
    @media screen and (min-width: 480px) {
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }

    @media screen and (min-width: 940px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;