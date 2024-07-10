import './Posts.css'
import PostData from '../../data/posts';
import PostCard from '../PostCard/PostCard';
import PostsNav from '../PostsNav/PostsNav';
import { useState } from 'react';
import SectionTitle_Button from '../SectionTitle_button/SectionTitle_Button';

function Posts() {

    const [item, setItems] = useState(PostData)
    const navItems = [...new Set(PostData.map((item) => item.education))]

    const filterItems = (edu) => {
        const newItems = PostData.filter((newval) => newval.education === edu)
        setItems(newItems)
    }

    return (
        <>
            <SectionTitle_Button subtitle='A Knowledge Treasure Trove' title='Explore FutureTechs In-Depth Blog Posts' buttontext='View All Blogs' />
            <div className='v-100 bg-dark-08'>
                <PostsNav
                    navItems={navItems}
                    filterItems={filterItems}
                    setItems={setItems}
                />
                <PostCard item={item} />
            </div>
        </>
    )
}

export default Posts