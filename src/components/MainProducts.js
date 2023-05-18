import styled from "styled-components"
import ItemCard from "./ItemCard";
import { useEffect, useState } from "react";
import ImageModal from "./ImageModal";

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
  gap: 66px 48px;
  margin-top: 10px;
`

export default function MainProducts ({ products, modal, setModal, imageUrl, setImageUrl }) {
  let newArr = products.filter(v => products.indexOf(v) < 4);
  let bookmarks = JSON.parse(localStorage.getItem('bookmark')) ;

  useEffect(()=>{
    localStorage.setItem('bookmark', JSON.stringify(bookmarks));
  })

  return (
    <section id="wrapper">

      {
      modal ? <ImageModal imageUrl={ imageUrl } setModal={ setModal } newArr={newArr}/> : null
      }

      <H2>상품 리스트</H2>

      <Section>
      <ItemCard newArr={newArr} modal={modal} setModal={setModal} setImageUrl={setImageUrl}/>
      </Section>
    
    </section>
    
    
    
  )
}