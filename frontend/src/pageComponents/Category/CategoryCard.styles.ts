import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    border-radius: 12px;
    background-color: #e50077;
    max-width: 250px ;
    min-width: 200px;
    margin-inline: 2%;
    color: #ffffff;

    p {
        font-weight: bolder;
        font-size: 20px;
    }
`
export const Container_image = styled.div`
    display: flex;
    width: 100%;
    height: auto;

    img {
        width: 100%;
    }
`