import React, { useState } from 'react'
import c from "./Register.module.css"
import {AiOutlineCloseCircle ,AiFillEye ,AiFillEyeInvisible} from "react-icons/ai"
const Register = (props) => {
    const [isPasswordShow , setIsPasswordShow]=useState(false)
    const handleEyeOpenClick = ()=>{
        let eyeOpen=document.getElementById("eyeOpen")
        let eyeClose=document.getElementById("eyeClose")
        let passwordInput = document.getElementById("password")
        setIsPasswordShow(true)
        eyeOpen.style.display="none"
        eyeClose.style.display="block"
        passwordInput.type="text"
    }
    const handleEyeCloseClick = ()=>{
        let eyeOpen=document.getElementById("eyeOpen")
        let eyeClose=document.getElementById("eyeClose")
        let passwordInput = document.getElementById("password")
        setIsPasswordShow(false)
        eyeClose.style.display="none"
        eyeOpen.style.display="block"
        passwordInput.type="password"

    }

  return (
    <div className={c.register}>
        <div className={c.register__card}>
        <p className={c.reg__title}>Register</p>
            <div className={c.regclose__wrapper} onClick={props.regClose}>
                <AiOutlineCloseCircle className={c.regclose__wrapper__icon}/>
            </div>
            <form onSubmit={(e)=>{
                e.preventDefault()
            }} action="" className={c.reg__form}>
                {isPasswordShow}
                <input type="email" className={c.reg__email} placeholder='email'/>
                <div className={c.reg__password__wrapper}>
                    <input id='password' type="password" className={c.reg__password} placeholder='password'/>
                <span className={c.password__eye__wrapper}>
                    <AiFillEye id='eyeOpen' className={c.password__eye__open} onClick={handleEyeOpenClick} />
                    <AiFillEyeInvisible id='eyeClose' className={c.password__eye__close} onClick={handleEyeCloseClick}/>
                </span>
                </div>
                <button className={c.reg__btn}>Register</button>
            </form>
        </div>
    </div>
  )
}

export default Register