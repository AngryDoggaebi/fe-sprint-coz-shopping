import styled from "styled-components"
import ItemCard from "./ItemCard";
import { useEffect } from "react";

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
  margin-bottom: 10%;
`
let P = styled.p`
  margin-top: 80px;
  margin-bottom: 80px;

  display: flex;
  flex-flow: row;
  justify-content: center;
  width: 100%;
`

export default function MainBookmarks () {
  let bookmarks = JSON.parse(localStorage.getItem('bookmark'));
  let newArr = bookmarks.filter(v => bookmarks.indexOf(v) < 4);

  return (
    <section id="wrapper">

      <H2>북마크 리스트</H2>

      <Section>
        {
          newArr.length === 0 
          ? <P>북마크한 상품이 없습니다</P>
          : <ItemCard newArr={newArr}/>
        }
      
      </Section>
    
    </section>
    
    
    
  )
}