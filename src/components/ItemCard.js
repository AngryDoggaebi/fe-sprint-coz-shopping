import styled from "styled-components"
import StarIconGray from "../img/StarIcon_Gray"
import { useEffect, useState } from "react"
import StarIcon from "../img/StarIcon"

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


export default function ItemCard ({ newArr, modal, setModal, setImageUrl }) {  

  let [bookmarks, setBookmarks] = useState(
    localStorage.getItem('bookmark')
    ? JSON.parse(localStorage.getItem('bookmark'))
    : []
  );

  useEffect(()=>{
    localStorage.setItem('bookmark', JSON.stringify(bookmarks));
  })

  return newArr.map((v) => {
    return (
      <Card key={v.id}>

        <ProductImg 
          src={ v.brand_image_url ? v.brand_image_url : v.image_url }
          onClick={()=>{
              modal 
              ? setModal(false) 
              : setModal(true);

              v.brand_image_url ? setImageUrl(v.brand_image_url) : setImageUrl(v.image_url);
          }}
        />
        
        <Star onClick={()=>{ 
          let copy = [...bookmarks];
          bookmarks.filter(x => x.id === v.id).length !== 0  
          ? setBookmarks(copy.filter(x => x.id !== v.id))
          : setBookmarks([...bookmarks, v]) 
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