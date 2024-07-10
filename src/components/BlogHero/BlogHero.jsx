import './BlogHero.css'


function BlogHero({img, title}) {
    return (
        <div 
        className='fa_blogHero d-flex justify-content-center align-items-end'
        style={{'--back-img' : `url(${img})`}}
        >
            <h1 className='text-white fa_blogHero-title'>{title}</h1>
        </div>
    )
}

export default BlogHero