import React from 'react'
import * as S from './CategoryCard.styles'
import { ApiCategories } from '../../types/api-types'

interface Props extends Omit<ApiCategories, 'idCategory'> {
    title: string
}

export const CategoryCard: React.FC<Props> = ({ strCategory, strCategoryDescription, strCategoryThumb, title }) => {
    return (
        <S.StyledLink to={`${title.toLowerCase() === 'cocktails' 
            ? `/cocktails/category/${strCategory}`
            : `/meals/category/${strCategory}`
        }`}>
            <S.Container>
                <S.Container_image>
                    <img src={strCategoryThumb} alt={strCategoryDescription} />
                </S.Container_image>
                <p>{strCategory}</p>
            </S.Container>
        </S.StyledLink>
    )
}
