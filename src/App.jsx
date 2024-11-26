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
import Electronics from './Components/All_Categories/Electronics/Electronics'
import Bags from './Components/All_Categories/Bags/bags'
import Footware from './Components/All_Categories/Footware/footware'
import Beauty from './Components/All_Categories/Beauty/beauty'
import Groceries from './Components/All_Categories/Grocery/Grocery'
import Jewellery from './Components/All_Categories/Jewellery/Jewellery'
import Shop from './Components/All_Categories/shop/Shops'
import Wellness from './Components/All_Categories/Wellness/Wellness'
import Product_Detail from './Components/Product_Detail/Product_Detail'
import AdsSection from './Components/Ads/Adsection'
import CartSection from './Components/cart/cartSection'
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
      
    <AdsSection></AdsSection>
      <FeaturedContnaier></FeaturedContnaier> 
      <Login></Login>
      </>
      } />
    <Route path="/Faction" element={<Faction_section/>}/>
    <Route path="/electronic" element={<Electronics/>}/>
    <Route path="/Bags" element={<Bags/>}/>
    <Route path="/Footware" element={<Footware/>}/>
    <Route path="/Beauty" element={<Beauty/>}/>
    <Route path="/Groceries" element={<Groceries/>}/>
    <Route path="/Jewellery" element={<Jewellery/>}/>
    <Route path="/Beauty" element={<Beauty/>}/>
    <Route path="/Shop" element={<Shop/>}/>
    <Route path="/Wellness" element={<Wellness/>}/>
    <Route path="/product/:id" element={<Product_Detail/>}/>
    <Route path="/Faction/product" element={<Product_Detail/>}/>
    <Route path="/Cart" element={<CartSection/>}/>
    </Routes>
    <FacilitySection></FacilitySection>
      <FooterSection></FooterSection>
      </BrowserRouter>
    </>
  )
}

export default App
