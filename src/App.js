import './App.css';
import Doctors from './pages/Doctors';
import Home from './pages/Home';
import { Link, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Couriers from './pages/Couriers';

function App() {
  // Desktop Login Drop-List 
  function DLDL() {
    var DLDropList = document.getElementById("DLDropList");
    if (DLDropList.style.height === "0px") {
      DLDropList.style.height = "200px";
      document.getElementById("LoginLink").style.backgroundColor = "#042940";
      document.getElementById("DLC").style.display = "block";
      document.getElementById("DLC1").style.display = "block";
      document.getElementById("DLC2").style.display = "block";
      document.getElementById("DLC3").style.display = "block";
    } else {
      DLDropList.style.height = "0px";
      document.getElementById("LoginLink").style.backgroundColor = "transparent";
      document.getElementById("DLC").style.display = "none";
      document.getElementById("DLC1").style.display = "none";
      document.getElementById("DLC2").style.display = "none";
      document.getElementById("DLC3").style.display = "none";
    }
  }
  // Desktop Login Drop-List 

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


  return (
    <div className="App">
      <>
        <div className='Logo'>

          <div className='MenuLogo'><i class="fa-solid fa-heart-pulse"></i><Link className='LogoLink' to="/">MOB<span className='span1'>MED</span></Link></div>

          <div className='Navigation' id='Nav'>
            <div className='NavLinks' id='Links'>
              <div className='LoginLink' onClick={DLDL} id='LoginLink'><a href='#'>LOGIN</a>
                <div className='DesktopLoginDropDown' id='DLDropList'>
                  <div className='DesktopLoginContent' id='DLC'><i class="fa-solid fa-user-doctor"></i><Link to="/doctors">DOCTOR</Link></div>
                  <div className='DesktopLoginContent1' id='DLC1'><i class="fa-solid fa-truck-medical"></i><Link to="/couriers">COURIERS</Link></div>
                  <div className='DesktopLoginContent2' id='DLC2'><i class="fa-solid fa-prescription-bottle-medical"></i>PHARMACIES</div>
                  <div className='DesktopLoginContent3' id='DLC3'><i class="fa-solid fa-sort"></i></div>
                </div>
              </div>
              <div><a href='#'>ABOUT</a></div>
              <div><a href='#'>SERVICES</a></div>
              <div><a href='#'>CONTACT</a></div>
            </div>
          </div>
          <div className='MenuIcon' id='MenuIcon' onClick={Menu}><div className='MenuBox' id='MenuBox'><i class="fa-solid fa-bars"></i></div></div>
        </div>


        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/sign_up" element={<SignUp/>} />
          <Route path='/couriers' element={<Couriers />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
