import Container from "@/components/layout/Container"
import PageTitle from "@/components/layout/PageTitle"

const RecipeDetails = () => {
  return (
    <Container className="space-y-4">
      <PageTitle title="Recipe Details" />
      <p className="text-lg">Recipe name here</p>
    </Container>
  )
}

export default RecipeDetails