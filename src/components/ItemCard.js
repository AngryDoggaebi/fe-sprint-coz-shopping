import styled from "styled-components"

let ProductImg = styled.img`
  /* background-image: ${props => props.bi }; */
  width: 264px;
  height: 210px;
  border-radius: 12px;
`
let ProductInfo = styled.section`
  display: flex;
  flex-flow: row;
  justify-content: ${ props => props.jc || 'end' };

`
let Title = styled.p`
  font-weight: bold;
`
let Card = styled.div`
  width: 264px;
  height: 210px;
`


export default function ItemCard ({ newArr }) {
  

  return newArr.map((v) => {
    return (
      <Card key={v.id}>
        <ProductImg src={ v.brand_image_url ? v.brand_image_url : v.image_url }/>
        <ProductInfo jc="space-between">
          <Title>{ v.brand_name ? v.brand_name : v.title }</Title>
          <p id="subInfo">{ v.follower ? '관심고객수' : v.discountPercentage }</p>
        </ProductInfo>
        <ProductInfo>
          <p id='thirdInfo'>{ v.follower ?  v.follower : v.price}</p>
        </ProductInfo>

      </Card>
      
    );
  })
  
}