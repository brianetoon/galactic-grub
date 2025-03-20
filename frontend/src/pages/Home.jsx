import Container from "@/components/layout/Container";
import RecipeCard from "@/components/recipe/RecipeCard";
import PageTitle from "@/components/layout/PageTitle";
import useRecipes from "@/hooks/useRecipes";

const Home = () => {
  const { recipes } = useRecipes();

  return (
    <Container className="space-y-6">
      <PageTitle title="All Recipes" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes && recipes.map(recipe => (
          <RecipeCard recipe={recipe} key={recipe._id} />
        ))}
      </div>
    </Container>
  )
}

export default Home