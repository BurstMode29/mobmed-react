import React from 'react';
import './Doctors.css';
import { Link } from 'react-router-dom';

function Doctors() {

  // Menu Button
  function Menu() {
    var x = document.getElementById("MNav");
    if (x.style.left === "0px") {
      x.style.left = "-1100px";
      x.style.boxShadow = "none";
      // document.getElementById("MenuBox").style.opacity = "100%";
      document.getElementById("MenuIcon").style.color = "#9fc131";
    } else {
      x.style.left = "0px";
      x.style.boxShadow = "2px 1px 30px #888888";
      // document.getElementById("MenuBox").style.opacity = "0%";
      document.getElementById("MenuIcon").style.color = "#042940";
    }
  };
  // Menu Button

  // Mobile-Menu-Login 
  function DropList() {
    var y = document.getElementById("LoginDrop");
    if (y.style.height === "0px") {
      y.style.height = "200px";
      document.getElementById("MLinks").style.top = "50px";
      document.getElementById("LB1").style.left = "-700px";
      document.getElementById("LB2").style.left = "-700px";
      document.getElementById("LB3").style.left = "-700px";
      document.getElementById("LB4").style.opacity = "0%";
      document.getElementById("LoginArrow").style.color = "#9fc131";

    } else {
      y.style.height = "0px"
      document.getElementById("MLinks").style.top = "260px";
      document.getElementById("LB1").style.left = "0px";
      document.getElementById("LB2").style.left = "0px";
      document.getElementById("LB3").style.left = "0px";
      document.getElementById("LB4").style.opacity = "100%";
      document.getElementById("LoginArrow").style.color = "white";

    }
  }
  // Mobile-Menu-Login


  return (
    <div id='Doctors'>

      <div>
        <div className='MobileNav' id='MNav'>
          <div className='MobileNavHead'>
            <div className='NavLogo'><i class="fa-solid fa-heart-pulse"></i>MOB
              <span className='span3'>MED</span></div>
            <p>An <span className='span2'>online platform</span> made for medical services click to join.</p>
          </div>

          <div className='LoginMobile' >
            <div className='MobileLoginButton' onClick={DropList}>
              <div className='LoginDrop'><i class="fa-solid fa-user-doctor"></i></div>
              <div className='LoginMobileText'>LOGIN</div>
              <div className='LoginArrow' id='LoginArrow'><i class="fa-solid fa-sort"></i></div>
            </div>

            <div className='LoginTransition' id='LoginDrop'>
              <div className='MobileLoginContent' id='LoginContent'>
                <div className='LoginBox1' id='LB1'><i class="fa-solid fa-user-doctor"></i>DOCTOR</div>
                <div className='LoginBox2' id='LB2'><i class="fa-solid fa-truck-medical"></i>DRIVER</div>
                <div className='LoginBox3' id='LB3'><i class="fa-solid fa-prescription-bottle-medical"></i>PHARMACY</div>
                <div className='LoginBox4' id='LB4'></div>
              </div>

            </div>
          </div>

          <div className='MobileLinks' id='MLinks'>
            <div className='SignUpLink'><a href='#'>SIGN UP</a></div>
            <div><a href='#'>ABOUT</a></div>
            <div><a href='#'>SERVICES</a></div>
            <div><a href='#'>CONTACT</a></div>
          </div>

          <div className='MobileMenuFooter'>
            <div><i class="fa-brands fa-facebook"></i><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-instagram"></i></div>
            <p>© MOBMED | MOBILE MEDICATION</p>
          </div>
        </div>

      </div>
      <div className='HomePage'></div>
      <div className='DoctorsHeader'>Welcome Back Doctor.</div>
      <div id='DoctorsLogin'>
        <div className='LoginForm'>
          <div>
            <div className='LoginHeader'>LOGIN</div>
            <div className='LoginInputs'>
              <input type="text" placeholder='User ID' required /><br></br>
              <input type="password" placeholder='Password' required /><br></br>
            </div>
            <button type='submit' className='LoginButton'>LOGIN</button>
            <div className='LoginPassWordReset'>Forgot your password?</div>
          </div>
        </div>
      </div>
      <div className='LoginFooter'>© MOBMED | MOBILE MEDICATION</div>
    </div>
  )
}

export default Doctors
