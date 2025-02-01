import styled from "styled-components";

export const Container = styled.section`
    max-width: 400px ;
    margin-inline: 2%;
    display:flex;
    flex-direction: column;
`
export const Container_image = styled.div`
display: flex;
 width: 100%;
 border-radius: 12px;
 overflow: hidden;
 box-shadow: 2px 5px 50px -30px black;
 
 img {
     width: 100%;
     height: auto;
     object-fit: cover;
    }
`

export const Title = styled.p`
font-size: 22px;
color: #471f05;
font-weight: 600;
`