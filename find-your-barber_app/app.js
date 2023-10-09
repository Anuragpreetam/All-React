import React from "react";
import ReactDOM  from "react-dom/client";
// import "apothecary-87-Wg3J83R1YSQ-unsplash.jpg from "images";
const logo = require('./images/logo.jpg')
const shop = require('./images/shop_1.svg')
// console.log(shop)


const root = ReactDOM.createRoot(document.getElementById('root'));

const Header = ()=>{
    return(
        <div className="header-container">
            <div >
                <img alt="logo" className="logo" src={logo}></img>
            </div>
            <div className="appName">
                <h1>Find your Barber...</h1>
            </div>
            <div className="nav-container">
                <ul>
                    <li className="nav-links">Home</li>
                    <li className="nav-links">About</li>
                    <li className="nav-links">Appointments</li>
                    <li className="nav-links">Contact</li>
                </ul>
            </div>
        </div>
    )
}


const Cards = ({src,desc,location})=>{
    console.log(src)
    return(
      
            <div className="card-container">
                <img src={src} className="shop-card"></img>
                <h2 className="shop-description">{desc}</h2>
                <h3>{location}</h3>
            </div>
       
    )
}

const Shops = ()=>{
    return(
        <div className="shop-container">
            <Cards src={shop} desc="Test 1" location="Nagole , Hyderabad"/>
            <Cards src={shop} desc="Test 1" location="Nagole , Hyderabad"/>
            <Cards src={shop} desc="Test 1" location="Nagole , Hyderabad"/>
            <Cards src={shop} desc="Test 1" location="Nagole , Hyderabad"/>
            <Cards src={shop} desc="Test 1" location="Nagole , Hyderabad"/>
            <Cards src={shop} desc="Test 1" location="Nagole , Hyderabad"/>
            <Cards src={shop} desc="Test 1" location="Nagole , Hyderabad"/>
        </div>
    )
}
const Container = ()=>{
    return(
        <div>
            <Header/>
            <Shops/>
        </div>
      
    )
    
}
root.render(<Container/>)

