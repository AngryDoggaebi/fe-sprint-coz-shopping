import CozShopping from "../img/CozShopping"
import Codestateslogo from "../img/Codestateslogo"
import Hamberger from "../img/Hamberger"
import { useState } from "react"
import { Link } from "react-router-dom"
import HambergerModal from "./HambergerModal"
import styled from "styled-components"

let HeaderInfo = styled.header`
  display: flex;
  justify-content: space-between;
  padding-left: 127px;
  padding-right: 127px;
  padding-top: 20px;
  padding-bottom: 20px; 
  box-shadow: 0 0 10px rgb(186, 186, 186);
`
let Logo = styled.div`
  display: flex;
  gap: 12px;
`

export default function Header(){

  let [modal, setModal] = useState(false);

  return(
    <>
    <HeaderInfo>
      <Logo>
        <Link to='/'> <Codestateslogo/> </Link>
        <CozShopping/> 
      </Logo>
      
      <div id="Hamberger" onClick={ () => { modal === true ? setModal(false) : setModal(true)} }>
        <Hamberger/>
      </div>
      
 
      
    </HeaderInfo>
    { modal === true ? <HambergerModal/> : null }
    
    </>
  )

}
