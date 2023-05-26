import CozShopping from "../img/CozShopping"
import Codestateslogo from "../img/Codestateslogo"
import Hamberger from "../img/Hamberger"
import styled from "styled-components"
import PropTypes from 'prop-types';

let HeaderInfo = styled.header`
  display: flex;
  justify-content: space-between;
  padding-left: 127px;
  padding-right: 127px;
  padding-top: 20px;
  padding-bottom: 20px; 
  box-shadow: 0 0 10px rgb(186, 186, 186);
`
let Logo = styled.div`
  display: flex;
  gap: 12px;
`

export default function Header({ label }) {

  return (
    <>
      <HeaderInfo>
        <Logo>
          <Codestateslogo />
          <CozShopping />
          {label}
        </Logo>

        <div id="Hamberger">
          <Hamberger />
        </div>
      </HeaderInfo>
    </>
  )

}