import styled from "styled-components";

export const SpinnerContainer = styled.div`
    width: 100%;
    height: 50vh;

    display: flex;
    align-items: center;
    justify-content: center;

    /* HTML: <div class="loader"></div> */
    .loader {
        width: 50px;
        height: 50px;
        margin: auto;
        aspect-ratio: 1;
        border-radius: 50%;
        background: 
            radial-gradient(farthest-side,#e50077 94%,#0000) top/8px 8px no-repeat,
            conic-gradient(#0000 30%,#e50077);
        -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
        animation: l13 1s infinite linear;
    }

    @keyframes l13{ 
        100%{transform: rotate(1turn)}
    }
`;