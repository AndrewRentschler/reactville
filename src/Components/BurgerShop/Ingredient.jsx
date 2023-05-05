
const Ingredient = (props) => {
	return (
		<li style={{backgroundColor: props.ingredient.color}}>
			{props.ingredient.name}
			{props.isList
				? <button 
						onClick={() => props.handleAddItem(props.ingredient)}
						>+
					</button>
				: <button
						onClick={() => props.handleRemoveItem(props.idx)}
						>X
					</button>
			}
		</li>
	)
}

export default Ingredient