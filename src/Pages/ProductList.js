import brandImg from '../img/brand.png';
import categoryImg from '../img/category.png';
import exhibitionImg from '../img/exhibition.png';
import productImg from '../img/product.png';
import allImg from '../img/all.png';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import ItemCard from '../components/ItemCard';
import ImageModal from '../components/ImageModal';
import { useSelector } from 'react-redux';

let Img = styled.img`
  width: 82px;
  height: 82px;
`
let Span = styled.span`
  font-weight: ${ props => props.fw };
  text-decoration: ${ props => props.td };
  color: ${ props => props.fc };
`
let Li = styled.li`
  display: flex;
  justify-content: center;
  gap: 36px;
  margin-top: 24px;
`
let Ul = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 6.5px;
  cursor: pointer;
`
let Section = styled.section`
  display: flex;
  flex-flow: row;
  justify-content: start;
  flex-wrap: wrap;
  margin-left: 127px;
  margin-right: 127px;
  gap: 30px 47px;
  margin-top: 26.5px;
  margin-bottom: 78px;
`

export default function ProductList ({ products }) {
  let [newArr, setNewArr] = useState( [...products] );
  let [current, setCurrent] = useState('전체');
  const navlist = [
    { 'title': '전체', 'img': allImg, 'filter': [...products]}, 
    { 'title': '상품', 'img': productImg, 'filter': [...products].filter(v => v.type === 'Product')}, 
    { 'title': '카테고리', 'img': categoryImg, 'filter': [...products].filter(v => v.type === 'Category')}, 
    { 'title': '기획전', 'img': exhibitionImg, 'filter': [...products].filter(v => v.type === 'Exhibition')}, 
    { 'title': '브랜드', 'img': brandImg, 'filter': [...products].filter(v => v.type === 'Brand')}
  ];

  let bookmarks = JSON.parse(localStorage.getItem('bookmark')) ;
  let modal = useSelector(state => state.modal.visible);

  useEffect(()=>{
    localStorage.setItem('bookmark', JSON.stringify(bookmarks));
  })
  
  return(
    <div id='wrapper'>

      { modal ? <ImageModal newArr={ newArr }/> : null }

      <Li>
        {navlist.map((v, i) => {
          return(
            <Ul key={i} 
              onClick={()=>{ 
                setNewArr(v.filter);
                setCurrent(v.title);
              }}
            >
              <Img src={ v.img } alt={ v.title }/>
              <Span 
                fw={ v.title===current ? 'bold' : '' } 
                td={ v.title===current ? 'underline' : '' }
                fc={ v.title===current ? '#412DD4' : '' }
              > 
                { v.title }  
              </Span>
            </Ul>

          );
        })}
      </Li>


      <Section>
        <ItemCard newArr={ newArr }/> 
      </Section>
      

    </div>
  )
}