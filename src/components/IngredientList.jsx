
export default function IngredientList ({ingredients, addIngredient})  {
  
  return <ul>
    {ingredients.map((ingredient, index) => (
      <li key={index} style={{backgroundColor: ingredient.color}} >
        {ingredient.name}
        <button onClick={() => addIngredient(ingredient)} > ᐩ </button>
      </li>
    ))}
  </ul>;
};


