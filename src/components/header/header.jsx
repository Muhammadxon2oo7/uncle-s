import React from 'react'
import { useState } from 'react'
import c from './Header.module.css'
import './Header.css'
import {RxTriangleDown} from "react-icons/rx"
import {FiMenu} from "react-icons/fi"
import {BsTelephoneFill ,BsTelegram} from "react-icons/bs"
import Register from '../register/Register'
import logo from "../../assets/img/logo.png"
import Login from '../login/Login'

const Header = () => {
  const [isRegOpen , setIsRegOpen] = useState(false);
  const regClose =()=>{
    setIsRegOpen(false)
  }
  const [isLogOpen , setIsLogOpen] = useState(false);
  const logClose =()=>{
    setIsLogOpen(false)
  }
  function hamfun(){
    let mobileNav =document.getElementById("mobilenav")
    // console.log(hamMenuEl.classList.length)
    if(mobileNav.classList.length ===1){
      console.log("if")
      mobileNav.classList.remove()
      mobileNav.classList.add("mobilenav")
    }else{
      console.log("else")
      mobileNav.classList.remove("mobilenav")
      mobileNav.classList.add()
    }
  }
  return (
    <div>
      <div className={c.top_register_header}>
        <div className={c.about_card}>
          <a className={c.header_tell} href='tel:+998933771283'>
            <BsTelephoneFill/> +998 (93) 3771383
          </a>
          <a className={c.header_telegram} href="https://t.me/JAMSHIDKHON_Imomov" target='_blank'>
            <BsTelegram/>
          </a>
          
        </div>
        <div className={c.reg_card}>
          <a href="#" className={c.reg_register} onClick={()=>{
            setIsRegOpen(true)
          }}>Register</a>
          {
            isRegOpen&& (
              <Register regClose={regClose}/>
            )
          }
          <a href="#" className={c.reg_login}onClick={()=>{
            setIsLogOpen(true)
          }}>Login</a>
          {
            isLogOpen&& (
              <Login logClose={logClose}/>
            )
          }
        </div>
      </div>
      <div className={c.middle__header}>
        <div className={c.middle__header__title}>
          <img className={c.header__logo} src={logo} alt="" />
          <p className={c.middle__header__title__p}>E-Investment</p>
        </div>
      </div>
      <div id='mbile_bottom_header' className={c.bottom__header}>
        <div id='ham__menu' className={c.hamburger} onClick={hamfun}>
          <FiMenu className={c.hamburger__icon}/>
        </div>
        
        <div id='mobilenav'  className={c.mobile__navbar}>
        <ul className={c.bottom__header__nabar}>
          <li><a href="#">CURRENT</a></li>
          <li><a href="#">ARCHIVES</a></li>
          <li className={c.dropdown}><a href="#">ABOUT <RxTriangleDown/> </a> 
          <div className={c.dropdown__content}>
          <a href="#">About the Journal</a>
          <a href="#">Aims and Scope</a>
          <a href="#">Abstracts and Indexing</a>
          <a href="#">Submissions</a>
          <a href="#">Editorial Team</a>
          <a href="#">Privacy Statement</a>
          </div></li>
          <li className={c.dropdown}><a href="#">AUTHOR GUIDELINES <RxTriangleDown/></a>
          <div className={c.dropdown__content}>
          <a href="#">About the Journal</a>
          <a href="#">Aims and Scope</a>
          <a href="#">Abstracts and Indexing</a>
          <a href="#">Submissions</a>
          <a href="#">Editorial Team</a>
          <a href="#">Privacy Statement</a>
          </div>
          </li>
          <li><a href="#">ANNOUNCEMENTS</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
        <div className={c.bottom__header__right}>
          <form onSubmit={(e)=>{
            e.preventDefault()
          }}>
            <input type="text" />
            <button>search</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header