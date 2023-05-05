import Ingredient from "./Ingredient"
import Draggable, {DraggableCore} from "react-draggable";

const BurgerStack = (props) => {
  return (
  <>
  {!props.stack.length ? 
    <ul className="burger-stack">
      Nothing on Burger
    </ul>:
    <ul className="burger-stack">
      {props.stack.map((ingredient,idx) => (
          <Ingredient 
            key={idx}
            idx={idx}
            ingredient={ingredient}
            handleRemoveItem={props.handleRemoveItem}/>
        ))
      }
    </ul>
  }
  </>
  )
}

export default BurgerStack