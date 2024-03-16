import "./itemListContainer.css"

const ItemListContainer = ( { greeting }) => {

  return (
    <div>
      <div className="saludo">{greeting}</div>
    </div>
  )
}

export default ItemListContainer
