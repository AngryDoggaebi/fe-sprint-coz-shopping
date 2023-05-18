import { useEffect, useState } from "react"
import ItemCard from "../components/ItemCard"
import styled from "styled-components"


let Section = styled.section`
  display: flex;
  flex-flow: row;
  justify-content: start;
  flex-wrap: wrap;
  margin-left: 127px;
  margin-right: 127px;
  gap: 66px 48px;
  margin-top: 26.5px;
  margin-bottom: 78px;
`

export default function Bookmark ( ) {
  let bookmarks = JSON.parse(localStorage.getItem('bookmark')) ;

  useEffect(()=>{
    localStorage.setItem('bookmark', JSON.stringify(bookmarks));
  })

  return (
    <div id='wrapper'>
      <Section>
        <ItemCard newArr={ bookmarks } /> 
      </Section>
    </div>
  )
  
}