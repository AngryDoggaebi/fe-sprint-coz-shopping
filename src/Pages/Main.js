import { useSelector } from "react-redux";
import MainBookmarks from "../components/MainBookmarks"
import MainProducts from "../components/MainProducts"
import ImageModal from "../components/ImageModal";
import { useEffect } from "react";



export default function Main({ products }) {

  let bookmarks = JSON.parse(localStorage.getItem('bookmark'));
  let newArr_bookmarks = bookmarks.filter(v => bookmarks.indexOf(v) < 4);
  let newArr_products = 
    (products === null ? undefined : products )
    .filter(v => products.indexOf(v) < 4);
  let bookmarks_products = [...newArr_products, ...newArr_bookmarks]
  let modal = useSelector(state => state.modal.visible);

  useEffect(()=>{
    localStorage.setItem('bookmark', JSON.stringify(bookmarks));
  })

  return (
    <div id='wrapper'>

      { modal ? <ImageModal newArr={ bookmarks_products }/> : null }

      <MainProducts newArr={ newArr_products }/>
      <MainBookmarks/>

    </div>
  )

}