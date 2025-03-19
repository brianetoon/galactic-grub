import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Avatar,
  AvatarImage 
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const RecipeCard = ({ recipe }) => {
  return (
    <Card className="w-full max-w-sm mx-auto pt-0 gap-2">
      <img 
        src="/images/bantha-burger.jpg"
        alt="Bantha Burger" 
        className="w-full rounded-t-xl border-b max-h-36 object-cover" 
      />
      <CardHeader>
        <CardTitle className="font-star-jedi text-primary-400 text-xl">
          { recipe.title }
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        {/* <p>{ recipe.description }</p> */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum expedita ullam voluptatum</p>
        <Button variant="link" className="text-base px-0">See Recipe</Button>
      </CardContent>

      <CardFooter className="gap-4">
        <Avatar className="size-10">
          <AvatarImage src="/images/han-solo.jpg" />
        </Avatar>
        <p>Han Solo</p>
      </CardFooter>
    </Card>
  )
}

export default RecipeCard