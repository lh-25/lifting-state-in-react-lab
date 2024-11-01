
export default function BurgerStack ({stack, removeIngredient}) {


  return <ul>
    {stack.map((ingredient, index) => (
      <li key={index} style={{backgroundColor: ingredient.color}} >
        {ingredient.name}
        
        <button onClick={() => removeIngredient(index)} > 🅧 </button>
      </li>
    ))}
  </ul>;
};

