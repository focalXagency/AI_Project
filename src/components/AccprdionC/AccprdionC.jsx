import { useState } from 'react'
import Questions from '../../data/QuestionAsked'
import AccordionItemC from '../AccordionItemC/AccordionItemC'
import './AccprdionC.css'

function AccprdionC() {

    const [active, setActive] = useState(1)

    return (
        <div className='fa_accordion'> 
            {
                Questions.map(ques => (
                    <AccordionItemC
                        key={ques.id}
                        id={ques.id}
                        setautoactive={setActive}
                        autoActive={(active==ques.id)}
                        Question={ques.Q}
                        answer={ques.A}
                    />
                ))
            }
        </div>
    )
}

export default AccprdionC