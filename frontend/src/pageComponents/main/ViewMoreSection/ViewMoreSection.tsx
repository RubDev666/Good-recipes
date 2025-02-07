import {Link} from "react-router";

import {Section} from "./viewMoreSection.styles.ts";

export default  function ViewMoreSection() {
    return(
        <Section className='main-sections'>
            <div>
                <h3 className='slider-title'>What are you going to cook today?</h3>

                <div className='category-links-container'>
                    <Link to='/meals'>Chicken</Link>
                    <Link to='/meals'>Starter</Link>
                    <Link to='/meals'>Beef</Link>
                    <Link to='/meals'>Vegetarian</Link>
                    <Link to='/meals'>Goat</Link>
                    <Link to='/meals'>SeaFood</Link>
                </div>

                <Link to='/meals' className='view-more-link'>View more categories</Link>
            </div>
        </Section>
    )
}