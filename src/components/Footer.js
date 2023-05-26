import styled from "styled-components"

let FooterInfo = styled.footer`
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 58px;
  position : relative;
  transform : translateY(-100%);
  border-top: 1px solid;
  color: rgb(186, 186, 186);
`
let FooterLine = styled.p`
  color: rgb(186, 186, 186);
`

export default function Footer () {
  
  return (

    <FooterInfo>
      <FooterLine>개인정보 처리방침 | 이용약관</FooterLine>
      <FooterLine>All rights reserved @ Codestates</FooterLine>
    </FooterInfo>
  )
}