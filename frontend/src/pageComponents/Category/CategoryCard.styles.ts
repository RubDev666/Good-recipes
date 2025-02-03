import { Link } from 'react-router'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
    text-decoration: none;
`

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    border-radius: 12px;
    background-color: #e50077;
    *max-width: 250px ;
    min-width: 200px;
    min-height:250px;
    color: #ffffff;
    text-decoration: none;
    
    p {
        font-weight: bolder;
        font-size: 20px;
    }
`


export const Container_image = styled.div`
    display: flex;
    width: 100%;
    height: 250px;
    background: #ede7e2;

    img {
        width: 100%;
    }
`