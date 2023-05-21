import styled from "styled-components"
import StarIconGray from "../img/StarIcon_Gray"
import { useEffect } from "react"
import StarIcon from "../img/StarIcon"
import  {  ToastContainer ,  toast  }  from  'react-toastify' ; 
import  'react-toastify/dist/ReactToastify.css' ;
import { useDispatch, useSelector } from "react-redux"
import { changeModalState, setBookmarksList, setImgUrl } from "../store"

let ProductImg = styled.img`
  width: 234px;
  height: 180px;
  border-radius: 12px;
  display: flex;
  position: relative;
`
let ProductInfo = styled.section`
  display: flex;
  flex-flow: row;
  justify-content: ${ props => props.jc || 'end' };
  font-weight: ${ props => props.fw || 'normal' };
`
let Card = styled.div`
  display: flex;
  flex-flow: column;
`
let Info = styled.p`
  color: ${ props => props.fontColor || 'black'};
  font-size: 15px;
`
let Star = styled.i`
  display: flex;
  position: relative;
  bottom: 35px;
  left: 200px;
`


export default function ItemCard ({ newArr }) {  


  const add = () => toast("추가되었습니다");
  const remove = () => toast("삭제되었습니다");

  let bookmarks = useSelector(state => state.bookmarks);

  useEffect(()=>{
    localStorage.setItem('bookmark', JSON.stringify(bookmarks));
  })

  let modal = useSelector(state => state.modal.visible)
  let dispatch = useDispatch()

  return newArr.map((v) => {
    return (
      <Card key={v.id}>

        <ToastContainer
          position="bottom-right"
        />

        <ProductImg 
          src={ v.brand_image_url ? v.brand_image_url : v.image_url }
          onClick={()=>{
              modal 
              ? dispatch(changeModalState(false))
              : dispatch(changeModalState(true))

              v.brand_image_url 
              ? dispatch(setImgUrl(v.brand_image_url))  
              : dispatch(setImgUrl(v.image_url))
          }}
        />
        
        <Star onClick={()=>{
          let copy = [...bookmarks];
          return(
            bookmarks.filter(x => x.id === v.id).length !== 0  
            ? (dispatch(setBookmarksList(copy.filter(x => x.id !== v.id))), remove())
            : (dispatch(setBookmarksList([...bookmarks, v])), add())  
            )   
          }}>
          { 
            bookmarks.filter(x => x.id === v.id).length !== 0  
            ? <StarIcon/> : <StarIconGray/> 
          }
        </Star>
        

        <ProductInfo jc="space-between" fw="bold">
          <Info>{ v.brand_name ? v.brand_name : v.title }</Info>
          <Info id="subInfo" fontColor='#452CDD'>{ 
            v.follower ? '관심고객수' : v.discountPercentage ? `${ v.discountPercentage }%` : '' }
          </Info>
        </ProductInfo>

        <ProductInfo>
          <Info id='thirdInfo'>
            { v.follower ?  Number(v.follower).toLocaleString() 
              : v.price ? `${ Number(v.price).toLocaleString() }원` : '' 
            }
          </Info>
        </ProductInfo>

      </Card>
      
    );
  })
  
}