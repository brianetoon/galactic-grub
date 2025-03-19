import FormHeader from "../layout/FormHeader";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";

const RecipeFormCard = ({ children }) => {
  return (
    <Card className="w-full max-w-sm md:max-w-md mx-auto mt-8">
      <CardHeader>
        <FormHeader title="create recipe" label="Add a new recipe to the Galactic Recipe Archive!" />
      </CardHeader>
      <CardContent>
        { children }
      </CardContent>
    </Card>
  )
}

export default RecipeFormCard