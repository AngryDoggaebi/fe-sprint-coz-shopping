import styled from "styled-components"
import MainBookmarks from "../components/MainBookmarks"
import MainProducts from "../components/MainProducts"


export default function Main({ products }) {

  return (
    <div id='wrapper'>

      <MainProducts products={products === null ? undefined : products} />
      <MainBookmarks />

    </div>
  )

}