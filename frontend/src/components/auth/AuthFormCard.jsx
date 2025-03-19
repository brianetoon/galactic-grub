import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";

import FormHeader from "../layout/FormHeader";
import BackButton from "./BackButton";

const AuthFormCard = ({ title, label, backButtonHref, backButtonLabel, children }) => {
  return (
   <Card className="w-full max-w-sm md:max-w-md mx-auto mt-8">
    <CardHeader>
      <FormHeader title={title} label={label} />
    </CardHeader>
    <CardContent>
      { children }
    </CardContent>
    <CardFooter>
      <BackButton label={backButtonLabel} href={backButtonHref} />
    </CardFooter>
   </Card>
  )
}

export default AuthFormCard;