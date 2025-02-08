import {Link} from "react-router";

import {Section} from "./viewMoreSection.styles.ts";

import type {ViewMoreSectionProps} from "../../../types/props.ts";

export default  function ViewMoreSection({tag, nameCategories, title}: ViewMoreSectionProps) {
    return(
        <Section className='main-sections'>
            <div>
                <h3 className='slider-title'>{title}</h3>

                <div className='category-links-container'>
                    {nameCategories.map(nameCategory => (
                        <Link key={nameCategory} to={`/${tag}/category/${nameCategory}`}>{nameCategory}</Link>
                    ))}
                </div>

                <Link to={`/${tag}`} className='view-more-link'>View more categories</Link>
            </div>
        </Section>
    )
}