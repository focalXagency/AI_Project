import './UsersPics.css'

function UsersPics({users, small}) {
    return (
        <div className={`d-flex fa_userimg-container ${small && 'fa_small'}`}>
            {
                users.map((img, index) => (
                    <div key={index} className='fa_userimg'>
                        <img src={img} alt="user" className='w-100 h-100 object-fit-cover' />
                    </div>
                ))
            }
        </div>
    )
}

export default UsersPics