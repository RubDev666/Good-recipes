import React from 'react'
import * as S from './CategoryCard.styles'

interface Props {
    title: string
    image: string
}


export const CategoryCard: React.FC<Props> = ({ image, title }) => {
    return (
        <S.Container>
            <S.Container_image>
                <img src={image} alt={title} />
            </S.Container_image>
            <p>{title}</p>
        </S.Container>
    )
}
