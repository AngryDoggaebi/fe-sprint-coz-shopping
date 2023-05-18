import styled from "styled-components"
import StarIcon_grey from "../img/StarIcon_grey"
import { useEffect, useState } from "react"
import StarIcon from "../img/StarIcon"

let ProductImg = styled.img`
  width: 264px;
  height: 210px;
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
  width: 264px;
  height: 210px;
`
let Info = styled.p`
  color: ${ props => props.fontColor || 'black'};
  font-size: 15px;
`
let Star = styled.i`
display: flex;
position: relative;
bottom: 34px;
left: 228px;
`


export default function ItemCard ({ newArr }) {  

  let [bookmarks, setBookmarks] = useState(JSON.parse(localStorage.getItem('bookmark')));

  useEffect(()=>{
    localStorage.setItem('bookmark', JSON.stringify(bookmarks));
  })

  return newArr.map((v) => {
    return (
      <Card key={v.id}>
        
        <ProductImg src={ v.brand_image_url ? v.brand_image_url : v.image_url }/>

        <Star onClick={()=>{ 
          setBookmarks([...bookmarks, v]);
        }}>
          { bookmarks.filter(x => x.title === v.title) ? <StarIcon/> : <StarIcon_grey/> }
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