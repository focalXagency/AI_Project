import './NumCard.css'

function NumCard({ number, subtext, big }) {
    return (
        <>
            <div className={`fa_NumCard position-relative ${big&& 'fa_big'}`}>
                <p className='title-2 mb-0 text-white'>{number}<span className=''>+</span></p>
                <p className='mb-0 text-gray-60'>{subtext}</p>
            </div>
            {
                !big&& <div className='fa_heroLine'></div>
            }
        </>
    )
}

export default NumCard