import "./itemListContainer.css"

const ItemListContainer = ( { greeting }) => {

  return (
    <div className="greetingBox">
      <div className="saludo">{greeting}</div>
    </div>
  )
}

export default ItemListContainer
