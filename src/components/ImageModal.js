import styled from "styled-components";

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
let Children = styled.div`
  display: flex;
  position: relative;
`
let Parent = styled.div`
  z-index: 3;
  position: fixed;
  top:0; left: 0; bottom: 0; right: 0;
  background: rgba(0, 0, 0, 0.8);

`

export default function ImageModal({ imageUrl, setModal }){
  
  return(
    <Parent onClick={ ()=>{ setModal(false) } }>
      <Children>
        <ModalImg src={ imageUrl }/>
      </Children>  
    </Parent>
    
  );
}