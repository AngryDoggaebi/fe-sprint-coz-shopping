import CozShopping from "../img/CozShopping"
import Codestateslogo from "../img/Codestateslogo"
import Hamberger from "../img/Hamberger"
import Gift from "../img/Gift"
import StarIcon from "../img/StarIcon"
import { useState } from "react"




export default function Header(){

  let [modal, setModal] = useState(false);

  return(
    <>
    <header>
      <div id="logo_cozShopping">
        <Codestateslogo/>  
        <CozShopping/> 
      </div>
      
      <div onClick={ () => { modal === true ? setModal(false) : setModal(true)} }>
        <Hamberger/>
      </div>
      
 
      
    </header>
    { modal === true ? <HamModal/> : null }
    
    </>
  )

}

function HamModal () {
  return (
    <>
    <div className='triangle'></div>
    <div className="modal">
      <div className="modalList">OOO님, 안녕하세요!</div>
      <div className="division-line"></div>
      <div className="modalList"><Gift/> 상품 리스트 페이지</div>
      <div className="division-line"></div>
      <div className="modalList"><StarIcon/> 북마크 페이지</div>
    </div>
    </>
    



  );
}
