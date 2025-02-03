import React from 'react'
import * as S from './CategoryLayout.styles'
import { CategoryCard } from './CategoryCard'
import type { ApiCategories } from '../../types/api-types'

interface Props {
    title: string
    cards: ApiCategories[] | null
}

export const CategoryLayout: React.FC<Props> = ({ title, cards }) => {
    return (
        <S.LayoutContainer>
            <S.Image_container>
                <img
                    src="https://www.recetasnestle.com.mx/sites/default/files/styles/webp/public/2022-08/header-recetarios-foodlist-desktop.jpg.webp?itok=rEqRcHyU"
                    alt="Category banner" />
            </S.Image_container>
            <S.Titles_container>
                <h4>{title}</h4>
                <p>All Categories</p>
            </S.Titles_container>
            <S.Card_container>
                {
                    cards?.map((card) => (
                        <CategoryCard
                            key={card.idCategory}
                            strCategory={card.strCategory}
                            strCategoryDescription={card.strCategoryDescription}
                            strCategoryThumb={card.strCategoryThumb}
                            title={title}
                        />
                    ))
                }
            </S.Card_container>
        </S.LayoutContainer>
    )
}
