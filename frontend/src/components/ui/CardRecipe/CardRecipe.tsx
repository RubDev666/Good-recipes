import React from 'react'
import * as S from './CardRecipe.styles'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCutlery } from '@fortawesome/free-solid-svg-icons'

interface Props {
    title: string
    image: string
    tag?: string
}

export const CardRecipe: React.FC<Props> = ({ title, image, tag }) => {
    return (
        <S.Container>
            <Link to='/'>
                <S.Container_image>
                    <img src={image} alt={title} />
                </S.Container_image>
                <S.Container_info>
                    {
                        tag?.toLowerCase().trim() === 'comida'
                        ? 
                        <S.Tag_food>
                            <FontAwesomeIcon icon={faCutlery} />
                        </S.Tag_food>
                        :
                        <S.Tag_drinks>
                            <FontAwesomeIcon icon={faCoffee} />
                        </S.Tag_drinks>

                    }

                    <S.Title>{title}</S.Title>
                </S.Container_info>
            </Link>
        </S.Container>
    )
}
