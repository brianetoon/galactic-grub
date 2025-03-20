import FormHeader from "../layout/FormHeader";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";

const RecipeFormCard = ({ children }) => {
  return (
    <Card className="w-full max-w-md md:max-w-lg mx-auto my-8">
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