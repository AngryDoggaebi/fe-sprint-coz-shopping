import MainBookmarks from "../components/MainBookmarks"
import MainProducts from "../components/MainProducts"

export default function Main({ products, modal, setModal, imageUrl, setImageUrl }) {

  return (
    <div id='wrapper'>

      <MainProducts 
        products={products === null ? undefined : products}
        modal={ modal }
        setModal={ setModal } 
        imageUrl={ imageUrl }
        setImageUrl={ setImageUrl }
      />
      <MainBookmarks 
        modal={ modal }
        setModal={ setModal } 
        imageUrl={ imageUrl }
        setImageUrl={ setImageUrl }
      />

    </div>
  )

}