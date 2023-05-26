import { Link } from "react-router-dom";
import Gift from '../img/Gift';
import HeaderStarIcon from '../img/HeaderStarIcon';

export default function HamModal () {
  return (
    <>
    <div className='triangle'></div>
    <div className="modal">
      <div className="modalList">OOO님, 안녕하세요!</div>
      <div className="division-line"></div>
      <Link to="/products/list" className="modalList"><Gift/> 상품 리스트 페이지</Link>
      <div className="division-line"></div>
      <Link to="/bookmark" className="modalList"><HeaderStarIcon/> 북마크 페이지</Link>
    </div>
    </>

  );
}