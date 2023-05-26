import styled from "styled-components"
import ItemCard from "./ItemCard";
import { useEffect, useState } from "react";
import ImageModal from "./ImageModal";
import { useSelector } from "react-redux";

let H2 = styled.h2`
  display: flex;
  margin-left: 127px;
  margin-top: 24px;
`
let Section = styled.section`
  display: flex;
  flex-flow: row;
  justify-content: start;
  margin-left: 127px;
  margin-right: 127px;
  gap: 66px 47px;
  margin-top: 10px;
`

export default function MainProducts ({ newArr }) {
  let bookmarks = JSON.parse(localStorage.getItem('bookmark')) ;
  let modal = useSelector(state => state.modal.visible)

  useEffect(()=>{
    localStorage.setItem('bookmark', JSON.stringify(bookmarks));
  })

  return (
    <section id="wrapper">

      <H2>상품 리스트</H2>

      <Section>
      <ItemCard newArr={newArr} />
      </Section>
    
    </section>
    
    
    
  )
}