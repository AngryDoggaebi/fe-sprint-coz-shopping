import styled from "styled-components"

let Section = styled.section`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
`

export default function MainProducts ({ products }) {
  let newArr = products.filter(v => products.indexOf(v) < 4);

  return (
    <section id="wrapper">
      <button onClick={()=>{ console.log(products[1]) }}>버튼</button>

      <Section>
      <ItemCard newArr={newArr}/>
      </Section>
    
    </section>
    
    
    
  )
}