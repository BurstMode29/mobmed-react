import React, { useState } from 'react';
import './SignUp.css';
import { getAuth, createUserWithEmailAndPassword, sendSignInLinkToEmail } from "firebase/auth";
import app from '../firebase';

function SignUp() {
  // Firebase-Auth
  const auth = getAuth(app);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://mobmed-user-client.netlify.app',
    // This must be true.
    handleCodeInApp: true,
  };


  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert("Successfully created an account")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(errorCode);
        // ..
      });

    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem('emailForSignIn', email);
        alert("Email has ben sent")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        //const errorMessage = error.message;
        alert(errorCode);
        // ...
      });
  }
  // Firebase-Auth

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


      Welcome to Mobile Medication, Please read and sign up!
      <div className='Form1'>
        {/* Business Form */}
        <div className='BusinessForm'>
          <div>
            <div>
              <div>
                <div className='Form1Header' id='FH'>Sign Up</div>
                <div className='Form1Text1' id='FT'>Provide medical services using mobile medication sign up here.</div>
              </div>
              <div className='Form1Inputs'>
                <input type='text' placeholder='Name' /><br></br>
                <input type='text' placeholder='Surname' /><br></br>
                <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} /><br></br>
                <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} /><br></br>
                <select name='service' id='service'>
                  <option value="doctor">Doctor</option>
                  <option value="courier">Courier</option>
                  <option value="pharmacist">Pharmacist</option>
                </select><br></br>
              </div><br></br>
              <input onClick={signUp} className='FormButton' type='submit' placeholder='Submit' id='FS' />
            </div>
          </div>
        </div>
        {/* Business Form Information */}
        <div>
          <div className='Form1Header2'>Mobmed for your Business</div>
          <div className='Form1Text'>
            <div>
              <p>Nostrud Lorem mollit mollit voluptate adipisicing est culpa tempor. Irure culpa pariatur qui duis. Est labore incididunt enim reprehenderit aute laborum magna est commodo laboris eiusmod quis labore cupidatat.

                Eiusmod quis Lorem amet fugiat eu ut eiusmod culpa commodo nisi elit elit. Qui sint minim nulla qui duis nisi excepteur pariatur irure. Veniam elit esse occaecat consequat aliquip eu commodo in aliquip.

              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='Form1'>
        {/* Patients Form */}
        <div className='PatientsForm'>
          <div>
            <div>
              <div>
                <div className='Form1Header' id='FH'>Sign Up</div>
                <div className='Form1Text1' id='FT'>Provide medical services using mobile medication sign up here.</div>
              </div>
              <div className='Form1Inputs'>
                <input type='text' placeholder='Name' /><br></br>
                <input type='text' placeholder='Surname' /><br></br>
                <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} /><br></br>
                <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} /><br></br>
              </div>
              <input onClick={signUp} className='FormButton' type='submit' placeholder='Submit' id='FS' />
            </div>
          </div>
        </div>
        {/* Patients Form Information */}
        <div>
          <div className='Form1Header2'>Mobmed for your Needs</div>
          <div className='Form1Text'>
            <div>
              <p>Nostrud Lorem mollit mollit voluptate adipisicing est culpa tempor. Irure culpa pariatur qui duis. Est labore incididunt enim reprehenderit aute laborum magna est commodo laboris eiusmod quis labore cupidatat.

                Eiusmod quis Lorem amet fugiat eu ut eiusmod culpa commodo nisi elit elit. Qui sint minim nulla qui duis nisi excepteur pariatur irure. Veniam elit esse occaecat consequat aliquip eu commodo in aliquip.

              </p>
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}

export default SignUp
