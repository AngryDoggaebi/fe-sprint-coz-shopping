import { useState } from "react"
import ItemCard from "../components/ItemCard"
import styled from "styled-components"


let Section = styled.section`
  display: flex;
  flex-flow: row;
  justify-content: start;
  flex-wrap: wrap;
  margin-left: 76px;
  margin-right: 76px;
  gap: 66px 48px;
  margin-top: 26.5px;
  margin-bottom: 78px;
`

export default function Bookmark ( ) {
  let bookmarks = JSON.parse(localStorage.getItem('bookmark')) ;
  console.log(bookmarks)

  return (
    <div id='wrapper'>
      <Section>
        <ItemCard newArr={ bookmarks } /> 
      </Section>
    </div>
  )
  
}