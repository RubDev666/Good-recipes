import styled from "styled-components";

export const Container = styled.section`
    max-width: 400px ;
    margin-inline: 2%;
    display:flex;
    flex-direction: column;
    
    a {
        color: #252525;
        text-decoration: none;
    }
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
export const Container_info = styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Title = styled.p`
font-size: 22px;
color: #471f05;
font-weight: 600;
`
export const Tag_food = styled.p`
    color: #ffffff;
    background-color: #ea4335;
    padding: 1% 2%;
    border-radius: 10px;
`
export const Tag_drinks = styled.p`
    color: #ffffff;
    background-color: #f2af29;
    padding: 1% 2%;
    border-radius: 10px;
`