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


export default function ItemCard ({ products }) {
  
  return (
    <Card>
      <ProductImg src={ products[0].image_url }/>
      <ProductInfo jc="space-between">
        <Title>{ products[0].title }</Title>
        <p id="subInfo">{ products[0].discountPercentage }</p>
      </ProductInfo>
      <ProductInfo>
        <p id='thirdInfo'>{ products[0].price }</p>
      </ProductInfo>
      

    </Card>
    
  );
}