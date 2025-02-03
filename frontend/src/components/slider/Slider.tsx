import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Navigation} from 'swiper/modules';

import { CardRecipe } from '../ui/CardRecipe/CardRecipe';

import { SliderContainer } from './slider.styles';

export default function Slider() {
    const [loading, setLoading] = useState(true);
    const [slidesView, setSlidesView] = useState(1);
    const [pagination, setPagination] = useState(true);
    const [navigation, setNavigation] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 580) {
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
        <SliderContainer>
            <Swiper
                spaceBetween={20}
                slidesPerView={slidesView}
                loop={true}
                pagination={pagination}
                navigation={navigation}
                modules={[Pagination, Navigation]}
            >
                <SwiperSlide>
                    <CardRecipe tag='comida' title="Pollo a la mostaza" image="https://www.recetasnestle.com.mx/sites/default/files/styles/cropped_recipe_card_new/public/srh_recipes/a7d2e2fcd07f73c3873dd323e3e2fad6.jpg.webp?itok=J4jDjK9W" />
                </SwiperSlide>
                <SwiperSlide>
                    <CardRecipe tag='comida' title="Pollo a la mostaza con salsa de kentocky friend chiken con pures" image="https://www.recetasnestle.com.mx/sites/default/files/styles/cropped_recipe_card_new/public/srh_recipes/a7d2e2fcd07f73c3873dd323e3e2fad6.jpg.webp?itok=J4jDjK9W" />
                </SwiperSlide>
                <SwiperSlide>
                    <CardRecipe tag='comida' title="Pollo a la mostaza" image="https://www.recetasnestle.com.mx/sites/default/files/styles/cropped_recipe_card_new/public/srh_recipes/a7d2e2fcd07f73c3873dd323e3e2fad6.jpg.webp?itok=J4jDjK9W" />
                </SwiperSlide>
                <SwiperSlide>
                    <CardRecipe tag='comida' title="Pollo a la mostaza" image="https://www.recetasnestle.com.mx/sites/default/files/styles/cropped_recipe_card_new/public/srh_recipes/a7d2e2fcd07f73c3873dd323e3e2fad6.jpg.webp?itok=J4jDjK9W" />
                </SwiperSlide>
                <SwiperSlide>
                    <CardRecipe tag='comida' title="Pollo a la mostaza" image="https://www.recetasnestle.com.mx/sites/default/files/styles/cropped_recipe_card_new/public/srh_recipes/a7d2e2fcd07f73c3873dd323e3e2fad6.jpg.webp?itok=J4jDjK9W" />
                </SwiperSlide>
                <SwiperSlide>
                    <CardRecipe tag='comida' title="Pollo a la mostaza" image="https://www.recetasnestle.com.mx/sites/default/files/styles/cropped_recipe_card_new/public/srh_recipes/a7d2e2fcd07f73c3873dd323e3e2fad6.jpg.webp?itok=J4jDjK9W" />
                </SwiperSlide>
            </Swiper>
        </SliderContainer>
    )
}