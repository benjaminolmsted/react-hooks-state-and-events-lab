import React, {useState} from "react";

function Item({ name, category }) {
   const [inCart, setInCart] = useState(false)
  const itemClass = inCart ? "in-cart" : ""
  const buttonClass = inCart? 'remove' : 'add'

  function handleClick(){
    setInCart( (inCart) => setInCart(!inCart))
  }
  
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
