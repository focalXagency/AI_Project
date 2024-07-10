import { useEffect, useState } from 'react'
import './AccordionItemC.css'

function AccordionItemC({ autoActive, Question, answer, setautoactive, id }) {

    const [active, setActive] = useState(autoActive)
    useEffect(() => {
        (autoActive) ? null : setActive(false);
    }, [autoActive])

    const handleActive = () => {
        setActive(!active)
        if (!active) {
            setautoactive(id)
        }
    }

    return (
        <div className='fa_accordion-container'>
            <button
                className={`text-white bg-transparent fa_accordion-btn title-25-5 w-100 d-flex justify-content-between gap-2 align-items-center ${active && 'fa_border-b'}`}
                onClick={handleActive}>
                <span className='text-start'>
                    {Question}
                </span>
                <span className={`fa_plus-icon position-relative ${active && 'fa_-btn'}`}>
                    <span className='fa_vertical-line fa_transition'></span>
                    <span className='fa_vertical-line fa_secLine fa_transition'></span>
                    <span className='fa_horisantial-line fa_transition'></span>
                </span>
            </button>
            <div className={`overflow-hidden fa_accordion-item fa_transition pe-5 sub_title-125 text-gray-50 ${(active) ? 'fa_openAccordion' : ''}`}>
                {answer}
            </div>
        </div>
    )
}

export default AccordionItemC