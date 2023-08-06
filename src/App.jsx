import  Navbar  from "./components/navbar";
import Home from "./components/home";
import Sociallinks from "./components/sociallinks";
import About  from "./components/About";
import  Portfolio  from "./components/Portfolio";
import Experiences from "./components/Experiences";
import Contact from "./components/contact";
function App() {
  return (
    <>
    <div  >
  <Navbar />
  <Home />
  <About />
  <Portfolio />
  <Experiences />
  <Contact />



  <Sociallinks />
    </div>
    
    </>
  );
}

export default App;
