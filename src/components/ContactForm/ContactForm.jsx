import './ContactForm.css'
import img from './../../assets/ContactFormImg.svg'
import { FaChevronDown } from "react-icons/fa";
import img1 from './../../assets/EarthFlag.png'
import country from '../../data/country'
import { useState } from 'react';

function ContactForm() {

    const [isActive, setIsActive] = useState(false)
    const [selected, setSelected] = useState(img1)

    const searchSelected = country.find((obj) => {
        if (obj.img === selected) {
            return true;
        }
        return false;
    })

    return (
        <div className='bg-dark-08 sa_BorderTopForm'>
            <div className='container_custom sa_FormContainer'>
                <div className='sa_ContactFormLeft col-lg-5 '>
                    <div>
                        <img src={img} alt="icon" className='sa_formImg' />
                    </div>
                    <div>
                        <h2 className='text-white sa_FormTextLeft mb-0 '>Get in Touch with AI Podcasts</h2>
                    </div>
                </div>
                <div className='col-lg-7 sa_ContactFormRight'>
                    <form className='sa_Form'>
                        <div className='sa_RowDivForm'>
                            <div className='sa_DivInputForm'>
                                <label className='sa_formFont text-white'>First Name</label>
                                <input className='sa_formInput sa_formInputFont' type="text" placeholder='Enter First Name' required />
                            </div>
                            <div className='sa_DivInputForm'>
                                <label className='sa_formFont text-white'>Last Name</label>
                                <input className='sa_formInput sa_formInputFont' type="text" placeholder='Enter Last Name' required />
                            </div>
                        </div>
                        <div className='sa_RowDivForm'>
                            <div className='sa_DivInputForm'>
                                <label className='sa_formFont text-white'>Email</label>
                                <input className='sa_formInput sa_formInputFont' type="email" placeholder='Enter your Email' required />
                            </div>
                            <div className='sa_DivInputForm'>
                                <label className='sa_formFont text-white'>Phone Number</label>
                                <div className='sa_DivNumberInput w-100'>
                                    <div className='sa_Drop_Down position-relative'>
                                        <div className='sa_Drop_DownBtn' onClick={(e) => setIsActive(!isActive)} >
                                            <img src={selected} className='sa_imgDropDown' />
                                            <FaChevronDown className='text-white sa_FaChevronDown' />
                                        </div>
                                        {isActive && (
                                            <div className='sa_Drop_DownContent'>
                                                {
                                                    country.map((select) => {
                                                        return (
                                                            <div key={select.id} className='sa_Drop_DownItem'
                                                                onClick={(e) => {
                                                                    setSelected(select.img)
                                                                    setIsActive(false)
                                                                }}
                                                            >
                                                                <img src={select.img} className='sa_imgDropDown' alt="" />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )}
                                    </div>
                                    <input className='sa_formInput sa_InputPhone sa_formInputFont' type="tel" maxLength="13" placeholder='Enter Phone Number' defaultValue={searchSelected && searchSelected.code} required />
                                </div>
                            </div>
                        </div>
                        <div className='sa_DivInputMessage'>
                            <label className='sa_formFont text-white'>Message</label>
                            <textarea className='sa_FormMessage sa_formInputFont' name="message" placeholder="Enter your Message" required></textarea>
                        </div>
                        <div className='sa_DivSubmit'>
                            <div className='sa_checkboxDiv'>
                                <input type="checkbox" className='sa_checkboxButton' required />
                                <label className='sub_title-125_feature text-white'>I agree with Terms of Use and Privacy Policy</label>
                            </div>
                            <input type="submit" value={'Send'} className='sa_SendButton' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm