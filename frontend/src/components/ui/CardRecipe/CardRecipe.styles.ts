import styled from "styled-components";

export const Container = styled.article`
    width: 100%;
    display:flex;
    flex-direction: column;
    
    a {
        color: #252525;
        text-decoration: none;
        margin: auto;
        width: 100%;
    }
`
export const Container_image = styled.div`
display: flex;
 width: 100%;
 border-radius: 12px;
 overflow: hidden;
 
 img {
     width: 100%;
     height: auto;
     object-fit: cover;
    }
`
export const Container_info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-bottom: 20px;
`
export const Title = styled.p`
font-size: 22px;
color: #471f05;
font-weight: 600;
margin: 0;
`
export const Tag_food = styled.p`
    color: #ffffff;
    background-color: #ea4335;
    padding: 1% 2%;
    border-radius: 100%;
`
export const Tag_drinks = styled.p`
    color: #ffffff;
    background-color: #f2af29;
    padding: 1% 2%;
    border-radius: 10px;
`