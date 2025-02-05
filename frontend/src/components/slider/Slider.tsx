import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Navigation} from 'swiper/modules';

import { CardRecipe } from '../ui/CardRecipe/CardRecipe';

import { SliderContainer } from './slider.styles';
import type { SliderProps } from '../../types/props';

export default function Slider({recipes, tag}: SliderProps) {
    const [loading, setLoading] = useState(true);
    const [slidesView, setSlidesView] = useState(1);
    const [pagination, setPagination] = useState(true);
    const [navigation, setNavigation] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 480) {
                setSlidesView(1);
                setPagination(true);
                setNavigation(false);
            } else if (window.innerWidth < 940) {
                setSlidesView(2);
                setPagination(true);
                setNavigation(false);
            } else if (window.innerWidth < 1280) {
                setSlidesView(3);
                setPagination(true);
                setNavigation(false);
            } else {
                setSlidesView(3);
                setPagination(false);
                setNavigation(true);
            }

            if(loading) setLoading(false);
        }

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    if(loading) return <p>Loading...</p>;

    return (
        <SliderContainer className="container">
            <Swiper
                spaceBetween={20}
                slidesPerView={slidesView}
                loop={true}
                pagination={pagination}
                navigation={navigation}
                modules={[Pagination, Navigation]}
            >
                {recipes.map((recipe) => {
                    const id = recipe.idMeal ?? recipe.idDrink;
                    const title = recipe.strMeal ?? recipe.strDrink;
                    const img = recipe.strMealThumb ?? recipe.strDrinkThumb;

                    if (!id || !title || !img) return null;
                    
                    return (
                        <SwiperSlide key={id}>
                            <CardRecipe tag={tag} title={title} img={img} id={id} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </SliderContainer>
    )
}