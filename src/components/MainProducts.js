import styled from "styled-components"

let Section = styled.section`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
`

export default function MainProducts ({ products }) {
  

  return (
    <section id="wrapper">
      <button onClick={()=>{ console.log(products[1]) }}>버튼</button>

      <Section>
      <p>{ products[0].title }</p>
      <p>{ products[1].title }</p>
      <p>{ products[2].brand_name  }</p>
      <p>{ products[3].title }</p>
      </Section>
    
    </section>
    
    
    
  )
}