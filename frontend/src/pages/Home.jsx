import Container from "@/components/layout/Container";
import RecipeCard from "@/components/recipe/RecipeCard";
import useRecipes from "@/hooks/useRecipes";

const Home = () => {
  const { recipes } = useRecipes();

  return (
    <Container className="space-y-6">

      {/* <h2 className="font-star-jedi-hollow text-4xl font-bold text-secondary-400">home</h2>

      <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloribus delectus consequuntur nisi? Ex molestias illum.</p> */}

      <h3 className="font-star-jedi-hollow font-bold text-secondary-400 text-4xl">All Recipes</h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes && recipes.map(recipe => (
          <RecipeCard recipe={recipe} key={recipe._id} />
        ))}
      </div>

    </Container>
  )
}

export default Home