import styled from "styled-components";

let Parent = styled.div`
  z-index: 3;
  position: fixed;
  top:0; left: 0; bottom: 0; right: 0;
  background: rgba(0, 0, 0, 0.8);

`
let Children = styled.div`
  display: flex;
  position: relative;
`
let Title = styled.span`
  position: absolute;
  z-index: 3;
  top: 28rem;
  left: 40rem;
  transform: translate(-50%, 50%);

  display: inline-block;
  height: 20px;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);

  border-radius: 12px;
`

export default function ImageModal({ imageUrl, setModal, newArr }){

  let info = newArr.filter(v => v.image_url === imageUrl || v.brand_image_url === imageUrl)
  
  return(
    
    <Parent onClick={ ()=>{ setModal(false) } }>
      <Children>
        
        <Title>{info[0].title ? info[0].title : info[0].brand_name}</Title>
        <ModalImg src={ imageUrl }/>
      </Children>  
    </Parent>
    
  );
}