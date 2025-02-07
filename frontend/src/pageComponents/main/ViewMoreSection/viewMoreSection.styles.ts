import {styled} from "styled-components";

export const Section = styled.section`
    text-align: center;
    margin: 40px 0 60px;

    h3 {
        *font-size: 1.7rem;
        color: var(--color-3);
        margin-bottom: 30px;
    }

    .category-links-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 700px;
        margin: 20px auto 40px;
        gap: 17px;

        a {
            background-color: var(--color-6);
            color: var(--color-2);
            padding: 8px 40px;
            text-decoration: none;
            *margin-right: 20px;
            border-radius: 50px;
            transition: all .3s ease-in-out;

            &:hover {
                background-color: var(--color-13);
                color: var(--color-5);
            }
        }
    }

    .view-more-link {
        border-radius: 50px;
        transition: all .3s ease-in-out;
        background-color: var(--color-1);
        color: var(--color-5);
        text-decoration: none;
        padding: 8px 40px;
        font-size: 1rem;
        font-weight: 600;
        border: solid 1px var(--color-1);

        &:hover {
            background-color: var(--color-5);
            color: var(--color-1);
        }
    }

    @media screen and (min-width: 940px) {
        .view-more-link {
            font-size: 1.2rem;
        }
    }
`;
