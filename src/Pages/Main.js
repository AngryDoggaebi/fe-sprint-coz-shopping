import MainProducts from "../components/MainProducts"

export default function Main ( { products } ) {

  return (
    <div id='wrapper'>
      <div>
        <MainProducts products={ products === null ? undefined  : products}/>
      </div>
    </div>
  )
  
}