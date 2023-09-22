
import Login from "./auth/Login";
import Register from "./auth/Register";
import Estore from "./components/Estore";
import PrivacyPolicy from "./components/PrivacyPolicy";
import {
  Navbar,
  Home,
  About,
  Teacher,
  Contact,
  Courses,
  Footer,
} from "./components/index";

import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      <>
  
      <Navbar />
      

      {/* <About /> */}
      {/* <Courses /> */}
      {/* <Teacher /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/privacy" element={<PrivacyPolicy/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/store" element={<Estore/>} />
     
      </Routes>
       <Footer />
      </>
    </div>
  );
}

export default App;
