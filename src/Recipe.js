const Recipe = (recipe) => {
  return (
  <div class="container mx-auto my-2 p-2 rounded border">
    <h1 class="mb-3 font-bold text-2xl">{recipe.name}</h1>
    <div class="flex md:flex-row flex-col md:space-x-8">
      <img src={recipe.image} alt="" class="filter blur-md mx-auto md:mx-0" width="300"/>
      <div>
        <h2 class="mb-2 font-bold text-l">Zutaten</h2>
        {recipe.ingredients.map((ingredient, index) => (  
          <div key={index} class="even:bg-gray-200 even:rounded px-2">{ingredient}</div>
        ))}

      </div>
    </div>
    <div>
      <h2 class="mt-8 mb-2 font-bold text-l">Zubereitung</h2> 
      {recipe.description.map((desc) => (
        <p>{desc}</p>
      ))}
    </div>
  </div>
  );
};

export default Recipe;

