import './App.css'
import Feature from "./Components/Feature/Feature"
import Header from "./Components/header/header"
import Slider_box from "./Components/Slider/Slider"
import Products from "./Components/Popular_Products/products"
import Login from "./Components/Login/login"
import FeaturedContnaier from "./Components/Featured_Products/FeaturedContnaier"
import FacilitySection from './Components/facility/FacilitySection'
import FooterSection from './Components/Footer/FooterSection'
import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Faction_section from './Components/All_Categories/Faction_cate/Faction_section'
function App() {


  return (
    <>
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={
        <>
        <Slider_box></Slider_box>
      <Feature></Feature>
      <Products></Products>
      <FeaturedContnaier></FeaturedContnaier>
      <Login></Login>
      </>
      } />
    <Route path="/Faction" element={<Faction_section/>}/>
    </Routes>
    <FacilitySection></FacilitySection>
      <FooterSection></FooterSection>
      </BrowserRouter>
    </>
  )
}

export default App
