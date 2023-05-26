import CozShopping from "../img/CozShopping"
import Codestateslogo from "../img/Codestateslogo"
import Hamberger from "../img/Hamberger"
import { useState } from "react"
import { Link } from "react-router-dom"
import HambergerModal from "./HambergerModal"

export default function Header(){

  let [modal, setModal] = useState(false);

  return(
    <>
    <header>
      <div id="logo_cozShopping">
        <Link to='/'> <Codestateslogo/> </Link>  
        <CozShopping/> 
      </div>
      
      <div id="Hamberger" onClick={ () => { modal === true ? setModal(false) : setModal(true)} }>
        <Hamberger/>
      </div>
      
 
      
    </header>
    { modal === true ? <HambergerModal/> : null }
    
    </>
  )

}
