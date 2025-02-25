import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'
const Loginpopup = ({setShowLogin}) => {
    const [currState,setCurrState]=useState("Login")
  return (
    <div className='login-popup'>
        <form  className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder='Your Name'required />}
                <input type="text" placeholder='Your Mail'required />
                <input type="text" placeholder='Your Password'required />
                

            </div>
            <button>{currState==="Sign-Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing,i agree to the terms of use and privacy policy</p>
            </div>
            {currState==="Login"?<p>Create new account?<span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>:<p>Already Have an account?<span onClick={()=>setCurrState("Login")}>Login Here</span></p>}

        </form>
      
    </div>
  )
}

export default Loginpopup
