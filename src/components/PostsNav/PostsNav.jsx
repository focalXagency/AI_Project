import './PostsNav.css'
import { useState } from 'react';
import PostData from '../../data/posts';


function PostsNav({ navItems, filterItems, setItems }) {

    const [active, setActive] = useState(-1);

    const handleAll = (id) => {
        setItems(PostData);
        setActive(id)
    }

    const handleAthorNav = (id) => {
        filterItems(id)
        setActive(id)
    }
    return (
        <div>
            <div className='sa_PostNav'>
                <div id='sa_PostNavv' className='container_custom sa_PostNavTop'>
                    <button
                        className={`${(active == -1) && 'active'}`}
                        onClick={() => handleAll(-1)}>
                        All
                    </button>
                    {
                        navItems.map(item => (
                            <button
                                className={`${(active == item) && 'active'}`}
                                key={item}
                                onClick={() => handleAthorNav(item)}>
                                {item}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PostsNav