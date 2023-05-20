import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { changeModalState } from "../store";
import StarIcon from "../img/StarIcon"
import StarIconGray from "../img/StarIcon_Gray"


let Bg = styled.div`
  z-index: 3;
  position: fixed;
  top:0; left: 0; bottom: 0; right: 0;
  background: rgba(0, 0, 0, 0.8);
`
let Parent = styled.div`
  height: 330px;
    width: 384px;
    display: flex;
    flex-flow: column;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
let Title = styled.span`

  position: absolute;
  bottom: 13px;
  left: 55px;

  z-index: 3;

  display: inline-block;
  width: 200px;

  color: white;
  font-weight: bold;
  text-align: start;
`
let ModalImg = styled.img`
  width: 384px;
  height: 330px;

  display: flex;
  position: absolute;
  z-index: 2;

  border-radius: 12px;
`
let Icon = styled.i`
  position: absolute;
  z-index: 3;
  bottom: 12px;
  left: 21px;
`

export default function ImageModal({ newArr }){
  
  let dispatch = useDispatch()
  let imageUrl = useSelector(state => state.imageUrl.url)
  let info = newArr.filter(v => v.image_url === imageUrl || v.brand_image_url === imageUrl)
  let bookmarks = JSON.parse(localStorage.getItem('bookmark'));
  
  return(
    
    <Bg onClick={ ()=>{ dispatch(changeModalState(false)) } }>
      <Parent className="parent">
        <Icon>{
          bookmarks.filter(v => v.id === info[0].id).length === 0
          ? <StarIconGray/>
          : <StarIcon/>
        }</Icon>
        <Title>{info[0].title ? info[0].title : info[0].brand_name}</Title>
        <ModalImg src={ imageUrl }/>
      </Parent>  
    </Bg>
    
  );
}