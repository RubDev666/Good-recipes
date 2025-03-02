import React from 'react'
import * as S from './CategoryCard.styles'
import { ApiCategories } from '../../types/api-types'

interface Props extends Omit<ApiCategories, 'idCategory'> {
    title: string
}

export const CategoryCard: React.FC<Props> = ({ strCategory, strCategoryDescription, strCategoryThumb, title }) => {
    return (
        <S.StyledLink to={`${title.toLowerCase() === 'cocktails'
            ? `/cocktails/category/${strCategory.replace('/', '_')}`
            : `/meals/category/${strCategory.replace('/', '_')}`
            }`}>
            <S.Container>
                <S.Container_image className="container-image">
                    <img src={strCategoryThumb} alt={strCategoryDescription} />
                </S.Container_image>
                <S.Container_p>
                    <p>{strCategory}</p>
                </S.Container_p>
            </S.Container>
        </S.StyledLink>
    ) 
}
