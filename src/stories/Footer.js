import styled from "styled-components"

let FooterInfo = styled.footer`
  display: flex;
  flex-flow: column;
  justify-content: center;

  border-top: 1px solid;
  padding-top: 20px;

  color: rgb(186, 186, 186);
`
let FooterLine = styled.p`
  display: flex;
  justify-content: center;
  line-height: 0px;

  color: rgb(186, 186, 186);
`

export default function Footer ({ label, label2, list }) {
  
  return (
    <FooterInfo>
      {
        list.map(v => { return (  
          <FooterLine>{ v }</FooterLine>
        ) } )
      }
    </FooterInfo>
  )
}