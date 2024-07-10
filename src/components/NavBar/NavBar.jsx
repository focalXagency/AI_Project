import './NavBar.css'
import arrow from './../../assets/icons/arrow.svg'
import logo from './../../assets/logo.svg'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

function NavBar() {

  const [clicked, setclicked] = useState(false);
  const [fixed, setfixed] = useState(false);
  const [open, setopen] = useState(false);

  const topnav = useRef(0);

  let absolute = {
    'position': 'absolute',
    'top': topnav.current.offsetHeight + 'px'
  }
  let fixedp = {
    'position': 'fixed',
    'top': 0
  }
 
const handleScrolling = () => {
  const scrollY = window.scrollY;
  if(scrollY > topnav.current.offsetHeight){
    setfixed(true)
  }else{
    setfixed(false)
  }
}

useEffect(() => {
  handleScrolling();

  window.addEventListener('scroll', handleScrolling);
  return () => {
    window.removeEventListener('scroll', handleScrolling)
  }
}, [])

  return (
    <>
      <div className={`fa_top-nav ${clicked && 'd-none'}`} ref={topnav} >
        <div className='container_custom d-flex justify-content-center align-items-end gap-2'>
          <p className='mb-0 sub_title-125 text-gray-60'>Subscribe to our Newsletter For <span className='d-none d-sm-inline'>New & latest</span> Blogs and Resources</p>
          <img src={arrow} alt="arrow" className='fa_arrow-icon cursor' onClick={() => setclicked(true)} />
        </div>
      </div>

      <div className='fa_navbar w-100' style={(fixed || clicked) ? fixedp : absolute}>
        <div className='container_custom d-flex justify-content-between align-items-center'>
          <div>
            <img src={logo} alt="FuturTech" className='fa_nav-logo' />
          </div>
          <nav className={`d-flex align-items-center fa_navLinks ${open && 'fa_nav-open'}`} onClick={() => setopen(false)}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='blog/news'>News</NavLink>
            <NavLink to='podcast'>Podcast</NavLink>
            <NavLink to='resources'>Resources</NavLink>
            <Link to='contact' className='fa_nav-contact sub_title-125 d-inline d-sm-none'>
              Contact Us
            </Link>
            <IoCloseOutline className='fa_nav-close_menu d-lg-none' />
          </nav>
          <div className={`fa_overlay ${open && 'fa_nav-open'}`} onClick={() => setopen(false)}></div>
          <div>
            <Link to='contact' className='fa_nav-contact sub_title-125 d-none d-sm-inline'>
              Contact Us
            </Link>
            <HiMenuAlt3 className='text-white fa_nav-menu d-lg-none ms-4' onClick={() => setopen(true)} />
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar