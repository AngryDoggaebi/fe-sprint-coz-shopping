import styled from "styled-components"
import ItemCard from "./ItemCard";

let Section = styled.section`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
`
let H2 = styled.h2`
  display: flex;
  margin-left: 76px;
`

export default function MainProducts ({ products }) {
  let newArr = products.filter(v => products.indexOf(v) < 4);

  return (
    <section id="wrapper">
      <button onClick={()=>{ console.log(Number(products[1].price).toLocaleString()) }}>버튼</button>

      <H2>상품 리스트</H2>

      <Section>
      <ItemCard newArr={newArr}/>
      </Section>
    
    </section>
    
    
    
  )
}