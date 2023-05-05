import '../../styles/burger.css'
import { useState } from 'react'

// Components
import BurgerStack from './BurgerStack'
import IngredientList from './IngredientList'
import { ingredients } from '../../data/burger-data'

const BurgerShop = () => {
  console.log(ingredients)
  const [stack, setStack] = useState([])
  
  const handleAddItem = (newItem) => {
    setStack([...stack, newItem])
  }
  const handleRemoveItem = (idx) => {
    setStack(stack.filter((ingredient, i) => i !== idx))
  }
  const clearStack = () => {
    setStack([])
  }

  return (
    <div className="burger-shop">
      <nav>
        <h1 style={{}}>Burger Shop</h1>
        <button onClick={clearStack}>Clear Order</button>
      </nav>
      <section>
        <IngredientList 
          ingredients={ingredients}
          handleAddItem={handleAddItem}
          />
        <BurgerStack 
          stack={stack} 
          handleRemoveItem={handleRemoveItem}
        />
      </section>
    </div>
  )
}

export default BurgerShop