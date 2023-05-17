import styled from "styled-components"
import ItemCard from "./ItemCard";

let Section = styled.section`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
`

export default function MainProducts ({ products }) {
  let newArr = products.filter(v => products.indexOf(v) < 4);

  return (
    <section id="wrapper">
      <button onClick={()=>{ console.log(Number(products[1].price).toLocaleString()) }}>버튼</button>

      <Section>
      <ItemCard newArr={newArr}/>
      </Section>
    
    </section>
    
    
    
  )
}