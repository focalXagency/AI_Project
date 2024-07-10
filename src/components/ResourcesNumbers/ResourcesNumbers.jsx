import NumCard from '../NumCard/NumCard'
import './ResourcesNumbers.css'

function ResourcesNumbers() {
    return (
        <div className='container_custom'>
            <div className='d-flex fa_resoursesNumber'>
                <NumCard
                    big
                    number={100}
                    subtext={'Resources available'} />
                <NumCard
                    big
                    number={'12k'}
                    subtext={'Total Downloads'} />
                <NumCard
                    big
                    number={'10k'}
                    subtext={'Active Users'} />
                <NumCard
                    big
                    number={100}
                    subtext={'Countries Accesses Our Content'} />
            </div>
        </div>
    )
}

export default ResourcesNumbers