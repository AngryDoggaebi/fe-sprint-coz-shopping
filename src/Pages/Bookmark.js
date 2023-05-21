import { useEffect, useState } from "react"
import ItemCard from "../components/ItemCard"
import styled from "styled-components"
import { useSelector } from 'react-redux';
import ImageModal from "../components/ImageModal";


let Section = styled.section`
  display: flex;
  flex-flow: row;
  justify-content: start;
  flex-wrap: wrap;
  margin-left: 127px;
  margin-right: 127px;
  gap: 30px 48px;
  margin-top: 70px;
  margin-bottom: 78px;
`

export default function Bookmark ( ) {
  let bookmarks = JSON.parse(localStorage.getItem('bookmark')) ;
  let modal = useSelector(state => state.modal.visible);

  useEffect(()=>{
    localStorage.setItem('bookmark', JSON.stringify(bookmarks));
  })

  return (
    <div id='wrapper'>

      { modal ? <ImageModal newArr={ bookmarks }/> : null }

      <Section>
        <ItemCard newArr={ bookmarks } /> 
      </Section>
    </div>
  )
  
}