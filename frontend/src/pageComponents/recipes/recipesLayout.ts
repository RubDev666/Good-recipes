import {styled} from "styled-components";

export const Heading = styled.div`
    h1 {
        text-align: center;
        color: var(--color-2);
        font-size: 1.5rem;
        text-transform: capitalize;
    }
`;

export const RecipesContainer = styled.div`
    *padding: 0 1rem;
    
    display: grid;
    align-items: flex-start;
    gap: 40px;
    
    @media screen and (min-width: 480px) {
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }

    @media screen and (min-width: 940px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;