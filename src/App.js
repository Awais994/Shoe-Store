import { BrowserRouter, Routes, Route } from "react-router-dom"
import Products from "./components/Products";
import Shoedetail from "./components/Shoedetail";
import Nav from "./components/nav"
import Imgslider from "./components/Imgslider"
import Picturecard from "./components/Imgslidertwo"
import About from "./components/About";

function App() {


  return (
    <>

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<><Imgslider/> <Picturecard/></>} />
          <Route path="/Products" element={<Products />}/>
          <Route path="/Products/:i" element={<Shoedetail />} />
          <Route path="/About" element={<About />} />

        </Routes>


      </BrowserRouter>

    </>
  );
}

export default App;
