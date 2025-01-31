import React from 'react'
import * as S from './Card.styles'

interface Props {
    title: string
    image: string
}

export const Card: React.FC<Props> = ({title, image}) => {
  return (
    <S.Container>
        <S.Container_image>
            <img src={image} alt={title} />
        </S.Container_image>
        <S.Title>{title}</S.Title>
    </S.Container>
  )
}
