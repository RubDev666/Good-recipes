import React from 'react'
import * as S from './CardRecipe.styles'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCutlery } from '@fortawesome/free-solid-svg-icons'

import type { CardRecipeProps } from '../../../types/props'

export const CardRecipe: React.FC<CardRecipeProps> = ({ title, img, tag, id }) => {
    return (
        <S.Container>
            <Link to={`${tag}/recipe/${id}`}>
                <S.Container_image>
                    <img src={img} alt={title} loading='lazy' />
                </S.Container_image>
                <S.Container_info>
                    {
                        tag === 'meals'
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
