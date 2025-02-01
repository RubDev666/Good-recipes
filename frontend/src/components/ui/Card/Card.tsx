import React from 'react'
import * as S from './Card.styles'
import { Link } from 'react-router'

interface Props {
    title: string
    image: string
    tag?: string
}

export const Card: React.FC<Props> = ({ title, image, tag }) => {
    return (
        <S.Container>
            <Link to='/'>
                <S.Container_image>
                    <img src={image} alt={title} />
                </S.Container_image>
                <S.Container_info>
                    <S.Title>{title}</S.Title>
                    {
                        tag?.toLowerCase() === 'comida'
                        ?
                        <S.Tag_food>{tag}</S.Tag_food>
                        :
                        <S.Tag_drinks>{tag}</S.Tag_drinks>

                    }
                </S.Container_info>
            </Link>
        </S.Container>
    )
}
