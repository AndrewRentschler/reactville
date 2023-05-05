import Ingredient from "./Ingredient"


const BurgerStack = (props) => {
  return (
  <>
  {!props.stack.length ? <h4>Nuthin</h4>:
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