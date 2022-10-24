import './App.css';
import contact from './images/contact_us.png';
import { getAuth, createUserWithEmailAndPassword, sendSignInLinkToEmail } from "firebase/auth";
import app from './firebase';
import React, { useState } from 'react';

function App() {

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
      // x.style.left = "-20px";
      // x.style.boxShadow = "2px 1px 30px #888888";
      // document.getElementById("MenuBox").style.opacity = "100%";
      // document.getElementById("MenuIcon").style.color = "white";
    } else {
      // x.style.left = "-350px"
      // x.style.boxShadow = "none";
      // document.getElementById("MenuBox").style.opacity = "0%";
      // document.getElementById("MenuIcon").style.color = "#042940";
    }
  };
  // Menu Button

  // Mobile-Menu-Login 
  function DropList() {
    var y = document.getElementById("LoginDrop");
    if (y.style.height === "0px") {
      y.style.height = "200px";
      document.getElementById("MLinks").style.top = "90px";
      document.getElementById("LB1").style.left = "0px";
      document.getElementById("LB2").style.left = "0px";
      document.getElementById("LB3").style.left = "0px";
      document.getElementById("LB4").style.opacity = "100%";
      document.getElementById("LoginArrow").style.color = "#9fc131";

    } else {
      y.style.height = "0px"
      document.getElementById("MLinks").style.top = "400px";
      document.getElementById("LB1").style.left = "-700px";
      document.getElementById("LB2").style.left = "-700px";
      document.getElementById("LB3").style.left = "-700px";
      document.getElementById("LB4").style.opacity = "0%";
      document.getElementById("LoginArrow").style.color = "white";

    }
  }
  // Mobile-Menu-Login

  // Sign-Up-Forms 



  function close() {
    var c = document.getElementById("Join");
    if (c.style.display === "block") {
      c.style.display = "none";
    } else {
      c.style.display = "block";
    }
  }

  function join() {
    var j = document.getElementById("Join");
    if (j.style.display === "block") {
      j.style.display = "none";
    } else {
      j.style.display = "block";
    }
  }

  // /Sign-Up-Forms

  // Slide Buttons

  // function MoveLeft() {
  //  var doctors = document.getElementsByClassName("ContentBox1");
  //  if (doctors.style.margin == "830px"){
  //   doctors.style.margin = "10px";
  //  }else {
  //   doctors.style.margin = "830px"
  //  }
  // }

  // function MoveRight() {

  // }


  // Slide Buttons

  return (
    <div className="App">
      <div className='Loading'></div>

      <div className='Home'>

        <div className='HomeContent'>

          <div className='Logo'>

            <div className='MenuLogo'><i class="fa-solid fa-heart-pulse"></i>MOB<span className='span1'>MED</span></div>
            <div className='MenuIcon' id='MenuIcon' onClick={Menu}><div className='MenuBox' id='MenuBox'><i class="fa-solid fa-bars"></i></div></div>
            <div className='Navigation' id='Nav'>
            <div className='NavLinks' id='Links'>
              <div className='LoginLink'><a href='#'>LOGIN</a></div>
                <div><a href='#'>ABOUT</a></div>
                <div><a href='#'>SERVICES</a></div>
                <div><a href='#'>CONTACT</a></div>
              </div>
            </div>
          </div>

          

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
              <div className='SignUpLink'><a href='#'>LOGIN</a></div>
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



        <div className='HomeContent1'>
          <div className='Pulse' id='Pulse'><i class="fa-solid fa-heart-pulse"></i></div>
          <div className='Header1'>YOUR DOCTOR ON HAND</div>
          <div className='Text1'>"ready to answer your call..."</div>
          <div className='Text2'>An <span className='span2'>online platform</span> made for medical services click to join.</div>
          <button className='Join' onClick={join}>JOIN</button>
        </div>



        <div className='SignUpForm' id='Join'>
          <div className='CloseSignUpForm' id='close' onClick={close}><i class="fa-solid fa-xmark"></i></div>
          <p>New to mobmed, simply sign up weather you're providing a service or seeking medical attention.</p>
          <div className='D-and-P'>

            <div className='ServiceProviderForm'>
              <div className='FormHeader'>Sign Up</div>
              <div className='FormText'>Provide medical services using mobile medication sign up here.</div>
              <div className='FormInputs'>
                <input type='text' placeholder='Name' /><br></br>
                <input type='text' placeholder='Surname' /><br></br>
                <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} /><br></br>
                <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} /><br></br>
              </div>
              <input onClick={signUp} className='FormButton' type='submit' placeholder='Submit' />


            </div>

            <div className='PatientForm'>
              <div className='FormHeader1'>Sign Up</div>
              <div className='FormText1'>Looking for fast and reliable medical attention sign up here.</div>
              <div className='FormInputs1'>
                <input type='text' placeholder='Name' /><br></br>
                <input type='text' placeholder='Surname' /><br></br>
                <input type='email' placeholder='Email' /><br></br>
              </div>
              <input className='FormButton1' type='submit' placeholder='Submit' />

            </div>
          </div>
        </div>


        <div className='MainContent'>

          <div className='content1'>
            <div><i class="fa-solid fa-user-doctor"></i></div>
            <div>DOCTORS</div>
            <p>Mobile doctors ready to provide<br></br>their services whenever and<br></br>wherever.</p>
          </div>
          <div className='content2'>
            <div><i class="fa-solid fa-truck-medical"></i></div>
            <div>COURIERS</div>
            <p>Mobile doctors ready to provide<br></br>their services whenever and<br></br>wherever.</p>
          </div>
          <div className='content3'>
            <div><i class="fa-solid fa-prescription-bottle-medical"></i></div>
            <div>PHARMACIES</div>
            <p>Mobile doctors ready to provide<br></br>their services whenever and<br></br>wherever.</p>
          </div>

        </div>

        <div className='Continue'>
          <div >
            <p>LEARN MORE</p>
            <div className='ArrowBox'><i class="fa-sharp fa-solid fa-arrow-down"></i></div>
          </div>
        </div>

      </div>

      <div className='WhosMobmed'>
        <div className='InfoContent'>

          <div className='InfoContentText'>
            <div className='Header2'>WHO IS MOBMED?</div>
            <div className='LineBox'><div className='Line'></div></div>
            <p> Velit ex Lorem in sunt officia aliquip nisi excepteur aliquip quis nisi ut.
              Est est duis elit eiusmod ad id irure est enim nisi culpa. Velit non ullamco cillum sunt occaecat ea cillum adipisicing mollit et.
              Aliqua sunt cupidatat labore non Lorem in cupidatat duis. Consectetur velit exercitation nisi cupidatat nisi amet nulla.
              Consectetur occaecat eu et non reprehenderit elit aute est adipisicing nisi sint.
            </p>
          </div>

          <div className='ImageBox'></div>
        </div>
      </div>

      <div className='OurServices'>

        <div className='ExtraContent'>

          <div className='Icons'>
            <div>
              <div className='DiamondIcon1'><div className='D1'><i class="fa-sharp fa-solid fa-clock"></i></div><div className='D2'><i class="fa-solid fa-computer"></i></div></div>
              <div className='DiamondIcon2'><div className='D3'><i class="fa-solid fa-truck-medical"></i></div></div>
              <div className='DiamondIcon3'><div className='D4'><i class="fa-solid fa-prescription-bottle-medical"></i></div><div className='D5'><i class="fa-solid fa-user-doctor"></i></div></div>
            </div>
          </div>

          <div className='ServicesInfo'>

            <div className='ServiceInfoContent'>

              <div className='ServiceInfoText'>
                <div>
                  <div className='Header3'>OUR SERVICES</div>
                  <div className='LineBox'><div className='Line1'></div></div>

                  <div className='OurServicesTextBox'>
                    <p>
                      Elit aute tempor adipisicing sunt proident quis id deserunt aliquip cupidatat irure ipsum. Reprehenderit consequat ullamco cillum aliquip cupidatat ipsum est eiusmod nisi dolore do proident sint. Qui anim proident qui occaecat Lorem excepteur amet occaecat est.
                      Nulla culpa minim nostrud sunt eiusmod nisi. Ipsum voluptate enim Lorem commodo non mollit Lorem aute laboris nostrud minim sit sint. Culpa adipisicing labore velit esse sint nulla exercitation dolor magna occaecat nulla sint. Ad tempor in anim non exercitation sunt anim cillum.
                      Consectetur magna amet sint sint. Nulla consectetur dolor reprehenderit adipisicing laboris voluptate ipsum id ullamco minim qui ullamco qui.<br></br>
                      Minim incididunt occaecat sint voluptate ea dolore Lorem proident voluptate occaecat esse id do. Ex laborum veniam adipisicing occaecat incididunt labore occaecat culpa occaecat pariatur.
                      Duis do do ipsum eiusmod laboris. Est anim mollit magna anim.<br></br> <br></br>
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className='WhoUseMobmed'>
        <div className='HeaderSection'>
          <div>
            <div className='Header4'>WHO USES MOBMED?</div>
            <div className='LineBox'><div className='Line2'></div></div>
            <p className='ServiceProvidersText'>
              Duis aliqua pariatur ut enim aliqua proident enim officia do ex tempor cillum amet ullamco.
            </p>
          </div>
        </div>
        <div className='ServiceProviders'>
          <div className='ContentBoxs'>
            {/* <div className='MoveLeft' onClick={MoveLeft}><i class="fa-solid fa-chevron-left"></i></div> */}
            <div className='ContentBox1'>
              <div>
                <div className='ContentBoxImage1'></div>
                <div className='ContentHeader1'>DOCTORS</div>
                <p className='ContentBoxText1'>
                  Minim fugiat id ipsum quis laborum reprehenderit adipisicing pariatur aliquip amet.
                  Aute in exercitation nisi anim est cillum aliquip mollit tempor aliqua sint.
                </p>
                <div className='ContentBoxIcons'>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </div>

            </div>
            <div className='ContentBox2'>

              <div>
                <div className='ContentBoxImage2'></div>
                <div className='ContentHeader2'>DRIVERS</div>
                <p className='ContentBoxText2'>
                  Minim fugiat id ipsum quis laborum reprehenderit adipisicing pariatur aliquip amet.
                  Aute in exercitation nisi anim est cillum aliquip mollit tempor aliqua sint.
                </p>
                <div className='ContentBoxIcons'>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </div>

            </div>

            <div className='ContentBox3'>
              <div>

                <div className='ContentBoxImage3'></div>
                <div className='ContentHeader3'>PHARMACISTS</div>
                <p className='ContentBoxText3'>
                  Minim fugiat id ipsum quis laborum reprehenderit adipisicing pariatur aliquip amet.
                  Aute in exercitation nisi anim est cillum aliquip mollit tempor aliqua sint.
                </p>
                <div className='ContentBoxIcons'>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-instagram"></i>
                </div>

              </div>
            </div>
            {/* <div className='MoveRight' onClick={MoveRight}><i class="fa-solid fa-chevron-right"></i></div> */}
          </div>
        </div>

      </div>

      <div className='LearnMore'>
        <div className='ExtraContent2'>
          <div>
            <div className='ExtraContentHeader'>
              <p className='ExtraContentText1'>Occaecat nisi qui mollit voluptate voluptate id officia?</p>
              <div className='LineBox'><div className='Line3'></div></div>
              <p className='ExtraContentText2'>Occaecat nisi qui mollit voluptate voluptate id officia consectetur dolore do in.</p>
            </div>
            <div className='ExtraContentButtons'>
              <div><button className='SignUp'>SIGN UP</button></div><br></br>
              <div><button className='LearnMoreButton'>LEARN MORE</button></div>
            </div>
          </div>
        </div>

      </div>

      <div className='ContactUs'>
        <div className='ContactUsContent'>
          <div className='ImageBox2'><img src={contact}></img></div>
          <div>
            <form className='ContactForm'>

              <div>
                <div className='Header5'>CONTACT US</div>
                <p>Occaecat pariatur sint aliquip labore aliqua sunt id consequat do anim. Minim sunt cupidatat veniam veniam aute.</p>
                <div className='Inputs'>
                  <input className='Name' type='text'></input><br></br>
                  <input className='Email' type='email'></input><br></br>
                  <input className='Message' type='text'></input><br></br>
                  <input className='Submit' type='submit'></input>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='footer'>
        <div className='FooterContent'>
          <div>
            <div className='FooterIcons'><i class="fa-brands fa-facebook"></i><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-instagram"></i></div>
            <div className='FooterText'>© MOBMED | MOBILE MEDICATION</div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
