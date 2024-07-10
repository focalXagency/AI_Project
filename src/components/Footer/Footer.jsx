import './Footer.css'
import { Link } from 'react-router-dom'
import arrow from './../../assets/icons/arrow.svg'
import { FaTwitter } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className='v-100 bg-dark-08'>
            <div className='container_custom'>
                <div className='sa_Footer'>
                    <div className='row sa_row'>
                        <div className="col-lg-2 col-md-3 col-sm-3 col-5 sa_order_1">
                            <div className="sa_colFooter d-flex flex-column align-items-start">
                                <h5 className="text-white sa_titleFooter"> Home </h5>
                                <ul className="list-unstyled d-flex flex-column sa_ulfooter">
                                    <li className='sa_textUl'>Features</li>
                                    <li className='sa_textUl'>Blogs</li>
                                    <li className='d-flex align-items-center'>
                                        <ul className='d-flex align-items-center list-unstyled'>
                                            <li className='sa_textUl'>Resources</li>
                                            <li className='sa_newFooter'> <span>New</span> </li>
                                        </ul>
                                    </li>
                                    <li className='sa_textUl'>Testimonials</li>
                                    <li className='sa_textUl'>Contact Us</li>
                                    <li className='sa_textUl'>Newsletter</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-3 col-5 sa_order_2">
                            <div className="sa_colFooter d-flex flex-column align-items-start">
                                <h5 className="text-white sa_titleFooter"> News </h5>
                                <ul className="list-unstyled d-flex flex-column sa_ulfooter">
                                    <li className='sa_textUl'>Trending Stories</li>
                                    <li className='sa_textUl'>Featured Videos</li>
                                    <li className='sa_textUl'>Technology</li>
                                    <li className='sa_textUl'>Health</li>
                                    <li className='sa_textUl'>Politics</li>
                                    <li className='sa_textUl'>Environment</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-3 col-5 sa_order_4">
                            <div className="sa_colFooter d-flex flex-column align-items-start">
                                <h5 className="text-white sa_titleFooter"> Blogs </h5>
                                <ul className="list-unstyled d-flex flex-column sa_ulfooter">
                                    <li className='sa_textUl'>Quantum Computing</li>
                                    <li className='sa_textUl'>AI Ethics</li>
                                    <li className='sa_textUl'>Space Exploration</li>
                                    <li className='d-flex align-items-center'>
                                        <ul className='d-flex align-items-center list-unstyled'>
                                            <li className='sa_textUl'>Biotechnology</li>
                                            <li className='sa_newFooter'> <span>New</span> </li>
                                        </ul>
                                    </li>
                                    <li className='sa_textUl'>Renewable Energy</li>
                                    <li className='sa_textUl'>Biohacking</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-5 sa_order_3">
                            <div className="sa_colFooter d-flex flex-column align-items-start">
                                <h5 className="text-white sa_titleFooter"> Podcasts </h5>
                                <ul className="list-unstyled d-flex flex-column sa_ulfooter">
                                    <li className='sa_textUl'>AI Revolution</li>
                                    <li className='d-flex align-items-center'>
                                        <ul className='d-flex align-items-center list-unstyled'>
                                            <li className='sa_textUl'>AI Revolution</li>
                                            <li className='sa_newFooter'> <span>New</span> </li>
                                        </ul>
                                    </li>
                                    <li className='sa_textUl'>TechTalk AI</li>
                                    <li className='sa_textUl'>AI Conversations</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-7 col-sm-7 col-12 sa_order_5">
                            <div className="sa_colFooter d-flex flex-column align-items-start px-1">
                                <h5 className="text-white sa_titleFooter"> Resources </h5>
                                <div className='sa_ulButton'>
                                    <Link className='sa_buttonFooter text-decoration-none ' to='resources'>
                                        Whitepapers
                                        <img src={arrow} alt="arrow" className='sa_arrowIcon' />
                                    </Link>
                                    <Link className='sa_buttonFooter text-decoration-none' to='resources'>
                                        Ebooks
                                        <img src={arrow} alt="arrow" className='sa_arrowIcon' />
                                    </Link>
                                    <Link className='sa_buttonFooter text-decoration-none' to='resources'>
                                        Reports
                                        <img src={arrow} alt="arrow" className='sa_arrowIcon' />
                                    </Link>
                                    <Link className='sa_buttonFooter text-decoration-none' to='resources'>
                                        Research Papers
                                        <img src={arrow} alt="arrow" className='sa_arrowIcon' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sa_bottomFooter'>
                    <div>
                        <ul className='list-unstyled d-flex mb-0'>
                            <li className='after'><Link className='text-decoration-none sa_liColor' to=''>Terms & Conditions</Link></li>
                            <li><Link className='text-decoration-none sa_liColor' to=''>Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className='d-flex align-items-center sa_iconsGap sa_order'>
                        <Link><FaTwitter className='text-white sa_iconsFooter' /></Link>
                        <Link><FaMedium className='text-white sa_iconsFooter' /></Link>
                        <Link><FaLinkedin className='text-white sa_iconsFooter' /></Link>
                    </div>
                    <div>
                        <p className='text-dark-40 mb-0 sa_liColor'>© 2024 FutureTech. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer