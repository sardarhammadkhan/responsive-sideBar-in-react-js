import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.css'
import {Route} from 'react-router-dom'
import {useState,useEffect} from 'react'
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import Purchase from '../Pages/Purchase'
function Navbar() {
    const [display, setdisplay] = useState(false)
   //  const [active, settactive] = useState(true)
    const show =()=>{
            //setdisplay('translateX(0%)')    
            setdisplay(!display)
           
    }
    return (
    <>
   <nav  >
    <div className='logo' >  
       SIDEBAR 
    </div>
    <ul className={`list ${display? 'translateBack ':'translateAway'}`}>
    <li><Link to='/Home'>Home</Link></li>
    <li><Link to='/Product'>Product</Link></li>
    <li><Link to='/Purchase'>Purchase</Link></li>
     </ul>
    
 <div className='burger' onClick={show}>
  <div className='line1'></div>
  <div className='line2'></div>
  <div className='line3'></div>
    </div>
   </nav>
          <Route path='/Home' exact component={Home}/>
            <Route path='/Product' component={Product}/> 
             <Route path='/Purchase' component={Purchase}/>
        </>
    )
}

export default Navbar
